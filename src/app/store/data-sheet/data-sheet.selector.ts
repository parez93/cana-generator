import {State} from "./data-sheet.reducer";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export const selectState = (state: {dataSheet: State}) => state;
export const selectDataSheet = createFeatureSelector<State>('dataSheet');
// export const selectDataSheet = createSelector(selectState, (state) => state.dataSheet)
export const selectGeneralInfo = createSelector(selectDataSheet, (state) => state.generalInfo);
export const selectSong = createSelector(selectDataSheet, (state) => state.song);
export const selectGospel = createSelector(selectDataSheet, (state) => state.gospel);
export const selectPsalm = createSelector(selectDataSheet, (state) => state.psalm);
export const selectPrayer = createSelector(selectDataSheet, (state) => state.prayer);
