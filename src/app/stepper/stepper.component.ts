import {Component} from '@angular/core';
import {Tab} from "../model";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-stepper',
  template: `
    <ul class="nav justify-content-center  nav-pills nav-fill">
      <li class="nav-item" *ngFor="let tab of tabs; index as i">
        <app-stepper-item [tab]="tab" [index]="i + 1"></app-stepper-item>
      </li>
    </ul>
  `,
  styles: []
})
export class StepperComponent {

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.tabs.forEach(t => t.disabled = true);

        switch (val.url) {
          case '/song':
            this.tabs[1].disabled = false;
            break;
          case '/gospel':
            this.tabs[2].disabled = false;
            break;
          case '/psalm':
            this.tabs[3].disabled = false;
            break;
          case '/prayer':
            this.tabs[4].disabled = false;
            break;
          default:
            this.tabs[0].disabled = false;
        }
      }
    });
  }

  tabs: Tab[] = [
    {name: 'Info generali', disabled: false},
    {name: 'Canto iniziale', disabled: true},
    {name: 'Vangelo', disabled: true},
    {name: 'Salmo', disabled: true},
    {name: 'Preghiera conclusiva', disabled: true}
  ];

}
