import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArtistsComponent } from './artists/artists.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { CustomerComponent } from './customer/customer.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    CustomerComponent,
    ProfileEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
