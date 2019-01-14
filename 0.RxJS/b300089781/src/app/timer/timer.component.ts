import { Component, OnInit } from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  html ='';

  constructor() { }

  ngOnInit() {
    const secondsCounter = interval(1000);
// Subscribe to begin publishing values
    secondsCounter.subscribe(n =>
      console.log(`It's been ${n} seconds since subscribing!`));

    const el = document.getElementById('my-element');

// Create an Observable that will publish mouse movements
    const mouseMoves: Observable<Event>= fromEvent(el, 'mousemove');

// Subscribe to start listening for mouse-move events
    const subscription: Subscription = mouseMoves.subscribe((evt: MouseEvent) => {
      // Log coords of mouse movements
      console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);

      // When the mouse is over the upper-left of the screen,
      // unsubscribe to stop listening for mouse movements
      if (evt.clientX < 60 && evt.clientY < 80) {
        subscription.unsubscribe();
      }
    });
  }

pauseButton(event) {
    this.html ='coucou';
    console.log('coucou');
}
resumeButton(event) {
    this.html ='ici';
    console.log('ici');
}
}
