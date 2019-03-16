import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
    <h3>PAGES</h3>
    <nav>
      <a routerLink="./dashboard" routerLinkActive="active"
         [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
