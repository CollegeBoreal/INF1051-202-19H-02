import {Component, Injector, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
  constructor(private injector: Injector) {
  }

  ngOnInit() {
    console.log('populate data');
    this.getData()
      .subscribe(
        (data: any) => this.colors = data
        , (err: any) => console.error('too bad' + err)
      );
  }

  // TODO this function should go in a service
  getData() {
    return this.httpService.get<string>('/api/colors');
  }

  // TODO this function should go in a service along with the above function
  protected get httpService(): HttpClient {
    return this.injector.get(HttpClient);
  }
}
