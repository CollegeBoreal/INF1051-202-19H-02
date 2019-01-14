import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  html ='';

  constructor() { }

  ngOnInit() {

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
