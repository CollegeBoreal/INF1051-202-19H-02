import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {NbAuthModule, NbPasswordAuthStrategy} from '@nebular/auth';
import {NbThemeModule} from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NbThemeModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
        }),
      ],
      forms: {},
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
