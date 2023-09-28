import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {DATA_SHEET_ACTIONS, selectGospel, selectPrayer, selectPsalm, selectSong, State} from "../store/data-sheet";
import {Observable, of} from "rxjs";
import {InfoItem} from "../model";
import {InfoItemEnum} from "../model";

import SongJson from '../config/song.config.json';
import GospelJson from '../config/gospel.config.json';
import PrayerJson from '../config/prayer.config.json';
import PsalmJson from '../config/psalm.config.json';

@Injectable({
  providedIn: 'root'
})
export class InfoItemService {

  constructor(private store: Store<State>) {
  }

  newInfoItem = (form: FormGroup, type: InfoItemEnum) => {
    const item: InfoItem = {
      heading: form?.get('heading')?.value,
      subHeading: form?.get('subHeading')?.value,
      body: form?.get('body')?.value,
      footer: form?.get('footer')?.value,
      type: type
    }

    this.store.dispatch(DATA_SHEET_ACTIONS.newInfoItem({payload: item}));
  }

  getType = (url: string): InfoItemEnum=> {
    switch (url) {
      case '/song':
        return InfoItemEnum.SONG;
      case '/gospel':
        return InfoItemEnum.GOSPEL;
      case '/psalm':
        return InfoItemEnum.PSALM;
      case '/prayer':
        return InfoItemEnum.PRAYER;
      default: return InfoItemEnum.SONG;
    }
  }

  getConfig = (type: InfoItemEnum | undefined) => {
    switch (type) {
      case InfoItemEnum.SONG:
        return SongJson;
      case InfoItemEnum.GOSPEL:
        return GospelJson;
      case InfoItemEnum.PSALM:
        return PsalmJson;
      case InfoItemEnum.PRAYER:
        return PrayerJson;
      default: return SongJson;
    }
  }

  loadInfoItem = (type: InfoItemEnum ): Observable<InfoItem | null> => {
    switch (type) {
      case InfoItemEnum.SONG:
        return this.store.select(selectSong);
      case InfoItemEnum.GOSPEL:
        return this.store.select(selectGospel);
      case InfoItemEnum.PSALM:
        return this.store.select(selectPsalm);
      case InfoItemEnum.PRAYER:
        return this.store.select(selectPrayer);
      default: return of(null);
    }
  }

  newOrAddInfoItemForm = (item: InfoItem | null, type: InfoItemEnum): FormGroup => {
    const config = this.getConfig(type);

    const fcHeading = new FormControl(item?.heading, config.heading.required ? Validators.required : null);
    const fcSubHeading = new FormControl(item?.subHeading, config.subHeading.required ? Validators.required : null);
    const fcBody = new FormControl(item?.body, config.body.required ? Validators.required : null);
    const fcFooter = new FormControl(item?.footer, config.footer.required ? Validators.required : null);

    const fg = new FormGroup({
      heading: fcHeading,
      subHeading: fcSubHeading,
      body: fcBody,
      footer: fcFooter
    });
    return fg;
  }

}
