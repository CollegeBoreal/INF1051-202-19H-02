import {Component, OnInit} from '@angular/core';
import {ColorsListService} from '../../@core/services/colors-list.service';

@Component({
  selector: 'app-pages-colors',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite color is: {{colors}}</h2>
    <p>Colors:</p>
    <ul>
      <li *ngFor = "let color of colors">
        {{color}}
      </li>
    </ul>
  `,
  styles: []
})
export class PagesColorsComponent implements OnInit {

  // TODO this Class should go in a model
  colors = [];
  constructor(private colorsListService: ColorsListService) {
  }

  ngOnInit() {
    console.log('populate data');
    this.colorsListService.getData()
      .subscribe(
        (data: any) => this.colors = data
        , (err: any) => console.error('too bad' + err)
      );
  }
}
