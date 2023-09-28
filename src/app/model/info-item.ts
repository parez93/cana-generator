import {InfoItemEnum} from "./enum";

export interface InfoItem {
  heading: string;
  subHeading: string;
  body: string;
  footer: string;
  type: InfoItemEnum;
}
