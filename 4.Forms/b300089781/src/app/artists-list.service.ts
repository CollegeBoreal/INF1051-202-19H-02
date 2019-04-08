import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistsListService {

  constructor(private httpClient: HttpClient) {}
  getData() {
    return this.httpClient.get<string>('/api/artists');
  }
setData(artist: string) {
    return this
      .httpClient
      .post<string>('/api/artists/create', artist);
}
}
