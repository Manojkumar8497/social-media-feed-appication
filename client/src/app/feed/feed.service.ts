import { Injectable } from '@angular/core';
import { HttpService } from '../shared/services/http.service';
import { environment } from 'src/environments/environment';
import { toast } from "bulma-toast";

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  // Getting the API url from environment file
  readonly apiUrl = environment.apiURL;

  constructor(private http: HttpService) { }

  // Getting feeds based on query
  getFeeds(page, limit) {
    return this.http.get(`${this.apiUrl}/feeds`, page, limit);
  }

  // Create a new feed
  createFeed(formData: FormData) {
    return this.http.post(`${this.apiUrl}/feed`, formData);
  }

  // Update the feed likes
  updateFeed(id: string) {
    return this.http.patch(`${this.apiUrl}/feeds/${id}`, {});
  }

  // Error message popup
  showError(message, type, timmer = 1500, position: any = "bottom-center") {
    setTimeout(() => {
      toast({
        message,
        type,
        dismissible: true,
        position,
        closeOnClick: true,
        pauseOnHover: true,
        duration: 1000,
        animate: { in: "fadeIn", out: "fadeOut" }
      });
    }, timmer);
  }
}
