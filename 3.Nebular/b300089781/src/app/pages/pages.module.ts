import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PagesDashboardComponent } from './pages-dashboard/pages-dashboard.component';

@NgModule({
  declarations: [PagesComponent, PagesDashboardComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
