import { Component, OnInit } from '@angular/core';
import {BandsListService} from './bands-list.service';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.scss']
})
export class BandsComponent implements OnInit {
  Bands = [];

  constructor(private bandsListService: BandsListService) {
  }

  ngOnInit() {
    console.log('populate data');
    this.bandsListService.getData()
      .subscribe(
        (data: any) => this.Bands = data
        , (err: any) => console.error('too bad' + err)
      );
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
