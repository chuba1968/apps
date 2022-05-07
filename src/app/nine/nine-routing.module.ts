import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NinePage } from './nine.page';

const routes: Routes = [
  {
    path: '',
    component: NinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NinePageRoutingModule {}
