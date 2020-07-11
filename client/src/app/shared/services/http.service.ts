import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  'providedIn': 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  // Get request
  get(apiUrl: string, page?: number, limit?: number) {
    let params = new HttpParams();
    if (page || limit) {
      if (page) params = params.append('page', `${page}`);
      if (limit) params = params.append('limit', `${limit}`);
    }
    return this.http.get(apiUrl, { params: params });
  }

  // Post request
  post(apiUrl: string, finalData) {
    return this.http.post(apiUrl, finalData);
  }

  // Update request
  patch(apiUrl: string, updatedData) {
    return this.http.patch(apiUrl, updatedData);
  }

}
