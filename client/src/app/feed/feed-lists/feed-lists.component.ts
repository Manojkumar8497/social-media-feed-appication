import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';
import { Feed } from '../feed.model';

@Component({
  selector: 'app-feed-lists',
  templateUrl: './feed-lists.component.html',
  styleUrls: ['./feed-lists.component.scss']
})
export class FeedListsComponent implements OnInit {

  feedsList: Feed[] = [];
  isLoading: boolean = false;
  isFinished: boolean = false;
  page: number = 1;
  limit: number = 2;

  constructor(private feedService: FeedService) { }

  // Fetching the feed data
  getFeeds() {
    if (this.isFinished) return;
    // Set the loading state is true
    this.isLoading = true;
    // Getting the feeds from feed service
    this.feedService.getFeeds(this.page, this.limit).subscribe(
      (response: any) => {
        this.isLoading = false;
        const feeds: Feed[] = response.feeds;
        this.feedsList.push(...feeds);
        // Check for the next page is available or not
        if (response.next) {
          // Set loading to false
          this.page = response.next.page;
        }
        // If not availale, then stop the loading and finish the request
        else {
          this.isFinished = true;
          this.isLoading = false;
        }
      },
      err => {
        this.isFinished = true;
        this.isLoading = false;
        // Error message popup
        this.feedService.showError(err.message, 'is-danger');
      }
    );
  }

  // If the scroll reached the end of the file
  onScroll() {
    // If the data is identical, stop making the query
    if (!this.isFinished) {
      this.getFeeds();
    }
  }

  // Change the loading state
  onLoading(value) {
    this.isLoading = value;
  }

  // Update the feedsList when the newFeed emits
  updateFeedsList(newFeed: Feed) {
    this.feedsList.unshift(newFeed);
  }

  ngOnInit(): void {
    // Calling the getFeeds method
    this.getFeeds();
  }

}
