import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {GeneralInfoService} from "./general-info.service";
import {GeneralInfo} from "../model";
import {Subscriber, Subscription} from "rxjs";

@Component({
  selector: 'app-general-info',
  template: `
    <div class="d-flex justify-content-center" *ngIf="!formGeneralInfo">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div class="row" *ngIf="formGeneralInfo">
      <div class="col col-xs-12">
        <form [formGroup]='formGeneralInfo'>
          <div class="form-floating mb-3">
            <input type="date"
                   class="form-control"
                   id="date"
                   placeholder=""
                   formControlName="date">
            <label for="date">Data</label>
          </div>

          <div class="form-floating mb-3">
            <input type="number" class="form-control" id="numMeeting" placeholder="1"
                   formControlName="numMeeting">
            <label for="numMeeting">Incontro n°</label>
          </div>

          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="title" placeholder="title"
                   formControlName="title">
            <label for="Title">Titolo incontro</label>
          </div>
        </form>

      </div>

    </div>
    <div class="row">
      <div class="col align-self-end">
      </div>
    </div>


    <div class="row">
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button type="button" class="btn btn-primary" (click)="onNext()"
                [disabled]="!formGeneralInfo?.valid">Avanti
        </button>
      </div>
    </div>
  `,
  styles: []
})
export class GeneralInfoComponent implements OnInit, OnDestroy {

  formGeneralInfo: FormGroup | undefined;
  storeSub: Subscription | undefined;

  constructor(private router: Router, private service: GeneralInfoService) {

  }

  ngOnInit(): void {
    this.storeSub = this.service.loadGeneralInfo()
      .subscribe((info) => this.formGeneralInfo = this.service.newOrAddGeneralInfoForm(info));

    // this.formGeneralInfo = this.service.newGeneralInfoForm();
  }

  ngOnDestroy() {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }

  onNext() {
    if (this.formGeneralInfo?.invalid) return;

    const generalInfo: GeneralInfo = {
      date: this.formGeneralInfo?.get('date')?.value,
      title: this.formGeneralInfo?.get('title')?.value,
      numMeeting: this.formGeneralInfo?.get('numMeeting')?.value
    }
    this.service.newGeneralInfo(generalInfo);

    this.router.navigate(['/song']);
  }
}
