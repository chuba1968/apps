import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FourPage } from './four.page';

const routes: Routes = [
  {
    path: '',
    component: FourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FourPageRoutingModule {}
