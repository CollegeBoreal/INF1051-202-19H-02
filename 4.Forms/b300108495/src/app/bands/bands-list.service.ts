import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BandsListService {

  constructor(private httpClient: HttpClient) { }
  getData() {
    return this.httpClient.get<string>('/api/bands');
  }
}
