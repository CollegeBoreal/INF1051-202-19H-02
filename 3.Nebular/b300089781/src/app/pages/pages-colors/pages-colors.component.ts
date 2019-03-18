import {Component, Injector, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-pages-colors',
  template: `
    <p>
      pages-colors works!
    </p>
  `,
  styles: []
})
export class PagesColorsComponent implements OnInit {

  // TODO this Class should go in a model
  Password = {
    result: String
  };

  constructor(private injector: Injector) {
  }

  ngOnInit() {
    console.log('populate data');
    this.getData()
      .subscribe(
        (data: any) => this.Password = data
        , (err: any) => console.error('too bad' + err)
      );
  }

  // TODO this function should go in a service
  getData() {
    return this.httpService.get<string>('/api/badPassword');
  }

  // TODO this function should go in a service along with the above function
  protected get httpService(): HttpClient {
    return this.injector.get(HttpClient);
  }
}
