import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SevenPage } from './seven.page';

const routes: Routes = [
  {
    path: '',
    component: SevenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SevenPageRoutingModule {}
