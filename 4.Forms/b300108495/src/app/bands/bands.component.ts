import { Component, OnInit } from '@angular/core';
import {BandsListService} from './bands-list.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.scss']
})

export class BandsComponent implements OnInit {
  name = new FormControl('');
  updateName() {
    this.name.setValue('Safaa Zaoui');
    this.bandsListService.setData(this.name.value);
  }
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

}
