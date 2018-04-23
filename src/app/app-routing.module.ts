import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BackgroundComponent } from './background/background.component';
import { OptionsComponent } from './options/options.component';
import { PopupComponent } from './popup/popup.component';

const routes: Routes = [
  { path: 'background', component: BackgroundComponent },
  { path: 'options', component: OptionsComponent },
  { path: 'popup', component: PopupComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ]
})
export class AppRoutingModule {}
