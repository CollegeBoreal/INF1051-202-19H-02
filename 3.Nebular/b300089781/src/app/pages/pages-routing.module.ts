import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesDashboardComponent} from './pages-dashboard/pages-dashboard.component';
import {PagesComponent} from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        children: [
          { path: '', component: PagesDashboardComponent }
        ],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
