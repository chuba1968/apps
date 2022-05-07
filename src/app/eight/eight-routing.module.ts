import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EightPage } from './eight.page';

const routes: Routes = [
  {
    path: '',
    component: EightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EightPageRoutingModule {}
