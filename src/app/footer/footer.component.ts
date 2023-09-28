import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
      <footer class="fixed-bottom bg-dark">
          <div class="container text-secondary">
              <div class="row pt-3">
                  <div class="col-12 col-md mt-1">
                      <p class="">© 2023 nazzerApp</p>
                  </div>
                  <div class="col-12 col-md-auto">
                      <p class="small fst-italic">Creato con <img src="../../assets/icons8-cuore-96.png"
                                                                        alt="cuore"
                                                                        title="cuore" width="28" height="28"> e
                          tante <img
                                  src="../../assets/icons8-preghiera-96.png" alt="corse" title="preghiere" width="28"
                                  height="28"> a Verona</p>
                  </div>
              </div>
          </div>
      </footer>`,
  styles: []
})
export class FooterComponent {

}
