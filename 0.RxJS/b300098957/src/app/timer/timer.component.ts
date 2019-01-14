import { Component, OnInit } from '@angular/core';
import {mapTo, scan, startWith, switchMap, takeWhile} from 'rxjs/operators';
import {EMPTY, interval, merge, Observable} from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  // variable d'instance
  html = '';

  constructor() { }

  ngOnInit() {
  }

  pauseButton(event) {
    this.html = 'coucou';
    console.log('coucou');
  }

  resumeButton(event) {
    this.html = 'ici';
    console.log('ici');
  }

}
