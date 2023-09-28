import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GeneralInfoComponent} from './general-info.component';
import {GeneralInfoRoutingModule} from "./general-info-routing.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    GeneralInfoComponent
  ],
  imports: [
    CommonModule,
    GeneralInfoRoutingModule,
    ReactiveFormsModule
  ]
})
export class GeneralInfoModule { }
