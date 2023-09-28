import {createAction, props} from "@ngrx/store";
import {GeneralInfo, InfoItem} from "../../model";

const NEW_GENERAL_INFO: string = '[GeneralInfo] newGeneralInfo';
const NEW_INFO_ITEM: string = '[InfoItem] newInfoItem';

const newGeneralInfo = createAction(NEW_GENERAL_INFO, props<{payload: GeneralInfo}>())
const newInfoItem = createAction(NEW_INFO_ITEM, props<{payload: InfoItem}>())
export const DATA_SHEET_ACTIONS =  {
  newGeneralInfo: newGeneralInfo,
  newInfoItem: newInfoItem,
}
