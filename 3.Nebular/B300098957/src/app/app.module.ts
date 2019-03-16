import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {
  NB_AUTH_INTERCEPTOR_HEADER,
  NbAuthJWTToken,
  NbAuthModule, NbAuthSimpleInterceptor,
  NbPasswordAuthStrategy
} from '@nebular/auth';
import { NbThemeModule } from '@nebular/theme';

const NB_AUTH_MODULE = [
  NbAuthModule.forRoot({
    strategies: [
      NbPasswordAuthStrategy.setup({
        name: 'email',
        token: {
          class: NbAuthJWTToken,
          key: 'token'
        }
      }),
    ],
    forms: {},
  }),
];

const NB_AUTH_PROVIDERS = [
  { provide: HTTP_INTERCEPTORS, useClass: NbAuthSimpleInterceptor, multi: true },
  { provide: NB_AUTH_INTERCEPTOR_HEADER, useValue: 'X-Auth-Token' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NbThemeModule.forRoot(),
    NB_AUTH_MODULE
  ],
  providers: [
    NB_AUTH_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
