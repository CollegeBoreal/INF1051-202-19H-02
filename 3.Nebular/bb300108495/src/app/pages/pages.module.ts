import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PagesDashboardComponent } from './pages-dashboard/pages-dashboard.component';
import { PagesColorsComponent } from './pages-colors/pages-colors.component';

@NgModule({
  declarations: [PagesComponent, PagesDashboardComponent, PagesColorsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
