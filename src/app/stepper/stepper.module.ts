import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StepperComponent} from './stepper.component';
import {StepperItemComponent} from "./stepper-item";


@NgModule({
  declarations: [
    StepperComponent,
    StepperItemComponent
  ],
  exports: [
    StepperComponent
  ],
  imports: [
    CommonModule,

  ]
})
export class StepperModule {
}
