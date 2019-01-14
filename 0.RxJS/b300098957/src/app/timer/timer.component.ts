import { Component, OnInit } from '@angular/core';
import {mapTo, scan, startWith, switchMap, takeWhile} from 'rxjs/operators';
import {EMPTY, fromEvent, interval, merge, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  // variable d'instance
  html = '';
  /*
    countdownSeconds = 10;
    pause$: Observable<boolean>;
    resume$: Observable<boolean>;
    interval$ = interval(1000).pipe(mapTo(-1));
    timer$ = merge(this.pause$, this.resume$)
      .pipe(
        startWith(true),
        // if timer is paused return empty observable
        switchMap(val => (val ? this.interval$ : EMPTY)),
        scan((acc, curr) => (curr ? curr + acc : acc), this.countdownSeconds),
        takeWhile(v => v >= 0)
      )
      .subscribe({next: value => this.html = '' + value });
  */

  constructor() { }

  ngOnInit() {
    // Create an Observable that will publish a value on an interval
    const secondsCounter: Observable<number> = interval(1000);
// Subscribe to begin publishing values
    secondsCounter.subscribe(n =>
      console.log(`It's been ${n} seconds since subscribing!`));

    const el = document.getElementById('my-element');

// Create an Observable that will publish mouse movements
    const mouseMoves: Observable<Event> = fromEvent(el, 'mousemove');

// Subscribe to start listening for mouse-move events
    const subscription: Subscription = mouseMoves.subscribe((evt: MouseEvent) => {
      // Log coords of mouse movements
      console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);

      // When the mouse is over the upper-left of the screen,
      // unsubscribe to stop listening for mouse movements
      if (evt.clientX < 40 && evt.clientY < 100) {
        subscription.unsubscribe();
      }
    });
  }

  pauseButton(event) {
    // this.pause$ = EMPTY.pipe(mapTo(false));
    this.html = 'coucou';
    console.log('coucou');
  }

  resumeButton(event) {
    // this.resume$ = EMPTY.pipe(mapTo(true));
    this.html = 'ici';
    console.log('ici');
  }

}
