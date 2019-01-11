import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'b300108495';
  ngOnInit() {
    console.log(`OnInit`);
    const hello = Observable.create(function (observer) {
      observer.next('Hello');
      observer.next('World');
    });
    const subscribe = hello.subscribe(val => console.log(val));
  }
}
