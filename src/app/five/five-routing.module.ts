import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FivePage } from './five.page';

const routes: Routes = [
  {
    path: '',
    component: FivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FivePageRoutingModule {}
