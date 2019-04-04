import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.scss']
})
export class BandsComponent {

  name = new FormControl('');
  updateName() {
    this.name.setValue('Zafaa');
  }
  
  
  Bands = [];

  constructor(private bandsListService: BandsListService) {
  }

  ngOnInit() {
    console.log('populate data');
    this.colorsBandService.getData()
      .subscribe(
        (data: any) => this.Bands = data
        , (err: any) => console.error('too bad' + err)
      );
  }

}
