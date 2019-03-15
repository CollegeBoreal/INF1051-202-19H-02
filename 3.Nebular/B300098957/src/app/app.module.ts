import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpResponse} from '@angular/common/http';
import {
  NB_AUTH_INTERCEPTOR_HEADER, NB_AUTH_TOKEN_INTERCEPTOR_FILTER,
  NbAuthJWTToken,
  NbAuthModule, NbAuthSimpleInterceptor,
  NbPasswordAuthStrategy
} from '@nebular/auth';
import { NbLayoutModule, NbThemeModule, NbUserModule } from '@nebular/theme';
import { HeaderComponent } from './header/header.component';

const NB_THEME_MODULES = [
  NbLayoutModule,
  NbUserModule,
  NbThemeModule.forRoot()
];

const NB_AUTH_MODULES = [
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NB_AUTH_MODULES,
    NB_THEME_MODULES
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: NbAuthSimpleInterceptor, multi: true },
    { provide: NB_AUTH_INTERCEPTOR_HEADER, useValue: 'X-Auth-Token' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
