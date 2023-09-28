import { Component } from '@angular/core';
import {PdfmeService} from "./pdfme/pdfme.service";

@Component({
  selector: 'app-root',
  template: `
      <app-header></app-header>
      <div class="container mt-4">
          <div class="row">
              <div class="col-md-12">
                  <app-stepper></app-stepper>
              </div>
              <div class="mt-4">
                  <div class="col-md-12">
                      <router-outlet></router-outlet>

                      <!--                    <app-general-info></app-general-info>-->
                      <!--                      <app-info-item></app-info-item>-->
                  </div>
              </div>
          </div>
      </div>
      <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'cana-generator';
}
