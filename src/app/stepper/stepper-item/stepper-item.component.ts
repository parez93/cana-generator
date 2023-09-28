import {Component, Input} from '@angular/core';
import {Tab} from "../../model";

@Component({
  selector: 'app-stepper-item',
  template: `
    <a class="nav-link focus-ring focus-ring-primary" aria-current="page"  [ngClass]="{'disabled' : tab?.disabled}">
      <span class="badge rounded-pill " [ngClass]="tab?.disabled ? 'text-bg-dark' : 'text-bg-primary' ">{{index}}</span>
      <span class="text-dark ps-2">{{tab?.name}}</span>
    </a>
  `,
  styles: []
})
export class StepperItemComponent {

  @Input() tab: Tab | undefined;
  @Input() index: number | undefined;
}
