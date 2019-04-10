import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileEditorService {

  constructor() { }
  setData(profileEditor: ProfileEditor) {
    return this
      .httpClient
      .post<string>('/api/artists/create', profileEditor);
}
