import {GeneralInfo} from "./general-info";
import {Gospel} from "./gospel";
import {Prayer} from "./prayer";
import {Psalm} from "./psalm";
import {Song} from "./song";

export interface DataSheet {
  generalInfo: GeneralInfo;
  gospel: Gospel;
  prayer: Prayer;
  psalm: Psalm;
  song: Song;
}
