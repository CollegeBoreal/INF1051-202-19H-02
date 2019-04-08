import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerListService {

  constructor(private httpClient: HttpClient) {}
  getData() {
    return this.httpClient.get<string>('/api/customer');
  }
  setData(customer: string) {
    return this
      .httpClient
      .post<string>('/api/customer/create', customer);
  }
}
