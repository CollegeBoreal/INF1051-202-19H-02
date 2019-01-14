import {Component, OnInit} from '@angular/core';
import {EMPTY, Observable, Subscription} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'b300108495';
  ngOnInit() {
    this.hello();
    this.evenNumbers();
    this.vide();
  }
  hello() {
    console.log(`OnInit`);
    const hello: Observable<String> = Observable.create(function (observer) {
      observer.next('Hello');
      observer.next('World');
    });
    const subscrZibe: Subscription = hello.subscribe(val => console.log(val));
  }
  evenNumbers() {
    const evenNumbers: Observable<Number> = Observable.create(function(observer) {
      let value = 0;
      const interval = setInterval(() => {
        if (value % 2 === 0) {
          observer.next(value);
        }
        value++;
      }, 1000);

      return () => clearInterval(interval);
    });
    const subscribe: Subscription = evenNumbers.subscribe(val => console.log(val));
    setTimeout(() => {
      subscribe.unsubscribe();
    }, 10000);
  }
  vide() {
    const subscribe = EMPTY.subscribe({
      next: () => console.log('Next'),
      complete: () => console.log('Complete!')
    });
  }
}
