import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesDashboardComponent} from './pages-dashboard/pages-dashboard.component';
import {PagesComponent} from './pages.component';
import {PagesColorsComponent} from './pages-colors/pages-colors.component';

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
      },
      {
        path: 'colors',
        children: [
          { path: '', component: PagesColorsComponent }
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
