import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {ArtistsListService} from '../artists-list.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  Artists = [];
  name = new FormControl('');
  updateName() {
    this.name.setValue('Moi');
    this.artistsListService.setData(this.name.value);
  }
  constructor(private artistsListService: ArtistsListService) {
  }

  ngOnInit() {
    console.log('populate data');
    this.artistsListService.getData()
      .subscribe(
        (data: any) => this.Artists = data
        , (err: any) => console.error('too bad' + err)
      );
  }

}
