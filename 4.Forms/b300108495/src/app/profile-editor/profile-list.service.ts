import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProfileList} from './profile-list';

@Injectable({
  providedIn: 'root'
})
export class ProfileListService {

  constructor(private httpClient: HttpClient) { }
  getData() {
    return this.httpClient.get<string>('/api/profile');
  }
  setData( profile: ProfileList) {
    return this
      .httpClient
      .post<string>('/api/profile/create', profile);
  }
}
