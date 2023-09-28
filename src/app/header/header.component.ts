import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
      <nav class="navbar navbar-default bg-body-secondary ">
          <div class="container-fluid">
              <div class="navbar-header">
                  <a href="#" class="navbar-brand">

                      <img src='../../assets/icons8-vase-96.png' alt="Logo" width="30" height="24"
                           class="d-inline-block align-text-top">
                      Cana Generator
                  </a>
              </div>
          </div>
      </nav>

  `,
  styles: [],
})
export class HeaderComponent {

}
