import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SixPage } from './six.page';

const routes: Routes = [
  {
    path: '',
    component: SixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SixPageRoutingModule {}
