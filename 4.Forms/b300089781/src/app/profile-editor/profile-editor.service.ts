import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProfileEditor} from './profile-editor';

@Injectable({
  providedIn: 'root'
})
export class ProfileEditorService {

  constructor(private httpClient: HttpClient) {}
  getData() {
    return this.httpClient.get<string>('/api/profile');
  }

  setData(profileEditor: ProfileEditor) {
    return this
      .httpClient
      .post<string>('/api/profile/create', profileEditor);
  }
}
