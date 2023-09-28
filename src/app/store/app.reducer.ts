import {ActionReducerMap} from "@ngrx/store";
import {dataSheetReducer, State} from "./data-sheet";

export interface AppState {
  dataSheet: State
}

export const appReducer: ActionReducerMap<AppState> = {
  dataSheet: dataSheetReducer
}
