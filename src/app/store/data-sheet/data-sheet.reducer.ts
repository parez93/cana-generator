import {Action, ActionReducer, createReducer, on} from "@ngrx/store";
import {GeneralInfo, Gospel, Prayer, Psalm, Song} from "../../model";
import {DATA_SHEET_ACTIONS} from "./data-sheet.actions";
import {InfoItemEnum} from "../../model/enum/info-item-enum";

export interface State {
  generalInfo: GeneralInfo | null;
  song: Song | null;
  gospel: Gospel | null;
  psalm: Psalm | null;
  prayer: Prayer | null;
}

const initialState: State = {
  generalInfo: null,
  gospel: null,
  prayer: null,
  psalm: null,
  song: null
};

const updByType = (state: State, action: any):State => {
  switch (action.payload.type) {
    case InfoItemEnum.SONG:
      return {
        ...state,
        song: {...action.payload}
      };
    case InfoItemEnum.GOSPEL:
      return {
        ...state,
        gospel: {...action.payload}
      };
    case InfoItemEnum.PSALM:
      return {
        ...state,
        psalm: {...action.payload}
      };
    case InfoItemEnum.PRAYER:
      return {
        ...state,
        prayer: {...action.payload}
      };
    default:
      return {
        ...state,
      };
  }
}

export const dataSheetReducer = createReducer(
  initialState,
  on(DATA_SHEET_ACTIONS.newGeneralInfo, (state, action) => {
      return {
        ...state,
        generalInfo: {...action.payload}
      }
    }
  ),
  on(DATA_SHEET_ACTIONS.newInfoItem, updByType),
);
