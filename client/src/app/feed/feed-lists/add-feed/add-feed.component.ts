import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FeedService } from '../../feed.service';
import { Feed } from '../../feed.model';

@Component({
  selector: 'app-add-feed',
  templateUrl: './add-feed.component.html',
  styleUrls: ['./add-feed.component.scss']
})
export class AddFeedComponent implements OnInit {

  // Emitter for new feed added and new feed loading
  @Output() isNewFeed: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() newFeed: EventEmitter<Feed> = new EventEmitter<Feed>();

  feedContent: string = "";
  previewImage: any = "";
  selectedImage: any = "";
  biggerImage: string = "";
  isLoading: boolean = false;
  isDisabled: boolean = false;

  constructor(private feedService: FeedService) { }

  // To handle the selected image
  onFileSelected(e) {
    // Set the loading as true
    this.isLoading = true;
    this.biggerImage = "";
    const file = e.target.files[0];
    // Check the event has file or not
    if (file) {
      // Check for image is lesser than one mb
      if (file.size > 1000000) {
        this.biggerImage = `Please try to upload a file less than 1 MB.`;
        this.isLoading = false;
        return;
      }
      else {
        // Assign the selected image
        this.selectedImage = file;
        // To convert file data into base64 url
        let reader = new FileReader();
        let that = this;
        // Converting the file to data url for image preview
        reader.onload = function (e) {
          // Timeout for file selection loading
          setTimeout(() => {
            that.previewImage = e.target.result;
            that.isLoading = false;
          }, 2000)
        };
        reader.readAsDataURL(file);
      }
    }
    // If the file not found then set the loading as false
    else {
      this.isLoading = false;
    }
  }

  // Remove the file
  onDeleteFile() {
    this.isLoading = true;
    setTimeout(() => {
      this.previewImage = "";
      this.selectedImage = "";
      this.isLoading = false;
    }, 2000);
  }

  // Reset the feed editor
  resetEditor() {
    this.feedContent = "";
    this.previewImage = "";
    this.selectedImage = "";
  }

  // Post the feed data
  onPostFeed() {
    if (this.feedContent || this.selectedImage) {
      // Disabling the post button
      this.isDisabled = true;
      // Appeding the data into formData
      const formData = new FormData();
      formData.append('content', this.feedContent ? this.feedContent : '');
      formData.append('image', this.selectedImage ? this.selectedImage : '');
      // Emit the event for loading
      this.isNewFeed.emit(true);
      // Sending the createFeed request to feedService
      this.feedService.createFeed(formData).subscribe(
        (response: { success: boolean, feed: Feed }) => {
          // Sending the new feed data to parent component
          if (response.success) {
            this.newFeed.emit(response.feed);
            // Resetting the feed editor
            this.resetEditor();
          }
          this.isNewFeed.emit(false);
          // Enabling the post button
          this.isDisabled = false;
        },
        err => {
          // Showing the error message
          this.feedService.showError(err.message, 'is-danger');
          this.isNewFeed.emit(false);
          // Enabling the post button
          this.isDisabled = false;
        }
      );
    }
  }

  ngOnInit(): void {
  }

}
