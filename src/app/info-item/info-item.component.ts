import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {InfoItemService} from "./info-item.service";
import {Subscription} from "rxjs";
import {InfoItemEnum, InfoItemSection} from "../model";
import {PdfmeService} from "../pdfme/pdfme.service";

@Component({
  selector: 'app-info-item',
  template: `
      <div class="d-flex justify-content-center" *ngIf="!form">
          <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
          </div>
      </div>
      <div class="row" *ngIf="form">
          <div class="col col-xs-12">
              <form [formGroup]="form">
                  <div class="form-floating mb-3" *ngIf="config?.heading?.show">
                      <input type="text" class="form-control" id="heading" placeholder="" formControlName="heading">
                      <label for="heading">{{config?.heading?.label}}</label>
                  </div>

                  <div class="form-floating mb-3" *ngIf="config?.subHeading?.show">
                      <input type="text" class="form-control" id="sub-heading" placeholder=""
                             formControlName="subHeading">
                      <label for="sub-heading">{{config?.subHeading?.label}}</label>
                  </div>

                  <div class="form-floating mb-3" *ngIf="config?.body?.show">
                  <textarea type="text" class="form-control" id="body" placeholder="" formControlName="body"
                            style="height: 200px"></textarea>
                      <label for="body">{{config?.body?.label}}</label>
                  </div>

                  <div class="form-floating mb-3" *ngIf="config?.footer?.show">
                      <input type="text" class="form-control" id="footer" placeholder="" formControlName="footer">
                      <label for="footer">{{config?.footer?.label}}</label>
                  </div>
              </form>
          </div>

      </div>
      <div class="row">
          <div class="col align-self-end">
          </div>
      </div>


      <div class="row">
          <div class="col-auto me-auto">
              <button type="button" class="btn btn-primary" (click)="onBack()">Indietro</button>
          </div>
          <div class="col-auto" *ngIf="this.router.url !== '/prayer'">
              <button type="button" class="btn btn-primary" (click)="onNext()" [disabled]="!form?.valid">Avanti</button>
          </div>
        <div class="col-auto" *ngIf="this.router.url === '/prayer'">
          <button type="button" class="btn btn-success" (click)="onNext()" [disabled]="!form?.valid">
            Genera PDF</button>
        </div>
      </div>
  `,
  styles: []
})
export class InfoItemComponent implements OnInit, OnDestroy{

  tabs: string[] = ['/song', '/gospel', '/psalm', '/prayer'];

  form: FormGroup | undefined;
  storeSub: Subscription | undefined;
  type: InfoItemEnum = InfoItemEnum.SONG;
  config?: InfoItemSection;

  constructor(public router:Router,
              private route: ActivatedRoute,
              private service: InfoItemService,
              private pdfService: PdfmeService) {

  }

  ngOnInit(): void {
    this.type = this.service.getType(this.router.url);
    this.config = this.service.getConfig(this.type);

    this.storeSub = this.service.loadInfoItem(this.type)
      .subscribe((info) => this.form = this.service.newOrAddInfoItemForm(info, this.type));

  }

  ngOnDestroy() {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }


  onNext() {
    if (!this.form || this.form.invalid) return;

    this.service.newInfoItem(this.form, this.type);

    let idx = this.tabs.indexOf(this.router.url);

    if(idx === -1) return;
    if(idx >= this.tabs.length - 1) {
      this.pdfService.generate();
      return;
    }

    this.form?.reset();
    this.router.navigate([this.tabs[idx + 1]]);

  }

  onBack() {
    let idx = this.tabs.indexOf(this.router.url);

    if(idx === -1) return;
    if(idx === 0) {
      this.router.navigate(['general-info']);
      return;
    }

    this.router.navigate([this.tabs[idx - 1]]);
  }

}
