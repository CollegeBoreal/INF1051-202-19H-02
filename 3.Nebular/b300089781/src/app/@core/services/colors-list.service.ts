import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColorsListService {

  constructor(private httpClient: HttpClient) {
  }

// TODO this function should go in a service
  getData() {
    return this.httpClient.get<string>('/api/colors');
  }


}
