import {Component, OnInit} from '@angular/core';
import {Observable, Subscription, EMPTY} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'b300098957';

  ngOnInit() {
    this.hello();
    this.evenNumbers();
    this.vide();
  }

  hello() {
    /*
  Create an observable that emits 'Hello' and 'World' on
  subscription.
    */
    const hello: Observable<String> = Observable.create(function(observer) {
      observer.next('Hello');
      observer.next('World');
    });

    // output: 'Hello'...'World'
    const subscribe: Subscription = hello.subscribe(val => console.log(val));

  }

  evenNumbers() {

    /*
  Increment value every 1s, emit even numbers.
*/
    const evenNumbers: Observable<number> = Observable.create(function(observer) {
      let value = 0;
      const interval = setInterval(() => {
        if (value % 2 === 0) {
          observer.next(value);
        }
        value++;
      }, 1000);

      return () => clearInterval(interval);
    });
    // output: 0...2...4...6...8
    const subscribe: Subscription = evenNumbers.subscribe(val => console.log(val));
    // unsubscribe after 10 seconds
    setTimeout(() => {
      subscribe.unsubscribe();
    }, 10000);

  }

  // https://yakovfain.com/2018/05/16/how-i-migrated-a-dozen-of-projects-to-angular-6/
  vide() {
    // output: 'Complete!'
    const subscribe = EMPTY.subscribe({
      next: () => console.log('Next'),
      complete: () => console.log('Complete!')
    });
  }
}
