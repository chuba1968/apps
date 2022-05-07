import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwoPage } from './two.page';

const routes: Routes = [
  {
    path: '',
    component: TwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TwoPageRoutingModule {}
