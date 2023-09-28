import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {DATA_SHEET_ACTIONS, selectGeneralInfo, State} from "../store/data-sheet";
import {GeneralInfo} from "../model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GeneralInfoService {

  constructor(private store: Store<State>) {
  }

  loadGeneralInfo = (): Observable<GeneralInfo | null> => {
    return this.store.select(selectGeneralInfo);
  }

  newOrAddGeneralInfoForm = (generalInfo: GeneralInfo | null): FormGroup => {
    console.log('newOrAddGeneralInfoForm',generalInfo)

    const dateControl = new FormControl(generalInfo?.date, Validators.required);
    const numMeetingControl = new FormControl(generalInfo?.numMeeting, [Validators.required, Validators.pattern('[0-9]+')]);
    const titleControl = new FormControl(generalInfo?.title, Validators.required);


    let formGeneralInfo = new FormGroup({
        date: dateControl,
        numMeeting: numMeetingControl,
        title: titleControl,
      }
    );
    return formGeneralInfo;
  }


  newGeneralInfoForm = (): FormGroup => {

    const dateControl = new FormControl(null, Validators.required);
    const numMeetingControl = new FormControl(null, Validators.required);
    const titleControl = new FormControl(null, Validators.required);


    let formGeneralInfo = new FormGroup({
        date: dateControl,
        numMeeting: numMeetingControl,
        title: titleControl,
      }
    );
    return formGeneralInfo;
  }

  newGeneralInfo = (generalInfo: GeneralInfo) => {
    this.store.dispatch(DATA_SHEET_ACTIONS.newGeneralInfo({payload: generalInfo}));
  }

}
