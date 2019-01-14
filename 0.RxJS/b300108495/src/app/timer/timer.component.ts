import { Component, OnInit } from '@angular/core';
import {EMPTY, empty, fromEvent, interval, merge, timer} from 'rxjs';
import {mapTo, scan, startWith, switchMap, takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const source = timer(1000, 2000);
    const subscribe = source.subscribe(val => console.log(val));
  }
}
