import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderModule} from "./header";
import {StepperModule} from "./stepper";
import {AppRoutingModule} from "./app-routing.module";
import {RouterOutlet} from "@angular/router";
import { StoreModule } from '@ngrx/store';
import {appReducer} from "./store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {FooterModule} from "./footer";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    FooterModule,
    StepperModule,
    AppRoutingModule,
    RouterOutlet,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
