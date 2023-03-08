import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxGestureModule} from "../../projects/herrenio/ngx-gestures/src/lib/ngx-gesture.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGestureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
