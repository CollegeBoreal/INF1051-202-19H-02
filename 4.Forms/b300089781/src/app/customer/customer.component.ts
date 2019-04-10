import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {CustomerListService} from '../customer-list.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  Customer = [];
  name = new FormControl('');
  updateName() {
    console.log(this.name.value)
    this.name.setValue('Moi');
    this.customerListService.setData(this.name.value);
  }
  constructor(private customerListService: CustomerListService) {
  }

  ngOnInit() {
    console.log('populate data');
    this.customerListService.getData()
      .subscribe(
        (data: any) => this.Customer = data
        , (err: any) => console.error('too bad' + err)
      );
  }

}
