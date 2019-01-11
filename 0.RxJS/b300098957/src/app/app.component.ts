import {Component, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'b300098957';

  ngOnInit(){

    /*
  Create an observable that emits 'Hello' and 'World' on
  subscription.
*/
    const hello = Observable.create(function(observer) {
      observer.next('Hello');
      observer.next('World');
    });

//output: 'Hello'...'World'
    const subscribe: Subscription = hello.subscribe(val => console.log(val));

  }
}
