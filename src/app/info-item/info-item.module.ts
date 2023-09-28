import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoItemComponent } from './info-item.component';
import {InfoItemRoutingModule} from "./info-item-routing.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    InfoItemComponent
  ],
  imports: [
    CommonModule,
    InfoItemRoutingModule,
    ReactiveFormsModule
  ]
})
export class InfoItemModule { }
