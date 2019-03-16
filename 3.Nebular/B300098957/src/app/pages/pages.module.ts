import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesDashboardComponent } from './pages-dashboard/pages-dashboard.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [PagesDashboardComponent, PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
