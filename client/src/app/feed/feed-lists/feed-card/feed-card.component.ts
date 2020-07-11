import { Component, OnInit, Input } from '@angular/core';
import { Feed } from '../../feed.model';
import { FeedService } from '../../feed.service';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss']
})
export class FeedCardComponent implements OnInit {
  // Listening to feed Data from parent component
  @Input() feed: Feed;
  // Check for the feed is liked or not
  isLiked: boolean = false;

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
  }

  // Feed liked method to increament the like count and update the feed
  onLiked() {
    // Sending the updated like count to feed service
    this.feedService.updateFeed(this.feed._id).subscribe(
      response => {
        this.feed.likes++;
        this.isLiked = true;
        // Showing the success message
        this.feedService.showError('Added to Liked Feed', 'is-info', 100, 'bottom-right');
      },
      err => {
        // Showing the error message
        this.feedService.showError(err.message, 'is-danger');
      }
    );
  }

}
