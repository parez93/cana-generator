import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {StoreModule} from "@ngrx/store";


const appRoutes: Routes = [
  {path: "", redirectTo:'/general-info', pathMatch: 'full'},
  {path: "general-info", loadChildren: () => import('./general-info/general-info.module').then(m => m.GeneralInfoModule)},
  {path: "song", loadChildren: () => import('./info-item/info-item.module').then(m => m.InfoItemModule)},
  {path: "gospel", loadChildren: () => import('./info-item/info-item.module').then(m => m.InfoItemModule)},
  {path: "psalm", loadChildren: () => import('./info-item/info-item.module').then(m => m.InfoItemModule)},
  {path: "prayer", loadChildren: () => import('./info-item/info-item.module').then(m => m.InfoItemModule)}

]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ]
})
export class AppRoutingModule { }
