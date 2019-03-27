import {Component, Injector, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ColorsListService} from '../../@core/services/colors-list.service';

@Component({
  selector: 'app-pages-colors',
  template: `
    <p>Colors:</p>
    <ul>
      <li *ngFor="let color of Colors">
        {{ color }}
      </li>
    </ul>
  `,
  styles: []
})
export class PagesColorsComponent implements OnInit {

  // TODO this Class should go in a model
  Colors = [];

  constructor(private colorsListService: ColorsListService) {
  }

  ngOnInit() {
    console.log('populate data');
    this.colorsListService.getData()
      .subscribe(
        (data: any) => this.Colors = data
        , (err: any) => console.error('too bad' + err)
      );
  }
}
