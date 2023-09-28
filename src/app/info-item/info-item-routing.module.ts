import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {InfoItemComponent} from "./info-item.component";

const routes:Routes = [
  {
    path:'',
    component: InfoItemComponent,
  },
  {
    path:'song',
    component: InfoItemComponent
  },
  {
    path:'gospel',
    component: InfoItemComponent
  },
  {
    path:'psalm',
    component: InfoItemComponent
  },
  {
    path:'prayer',
    component: InfoItemComponent
  },
];

@NgModule(
  {
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  }
)
export class InfoItemRoutingModule {

}
