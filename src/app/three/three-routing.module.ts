import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThreePage } from './three.page';

const routes: Routes = [
  {
    path: '',
    component: ThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThreePageRoutingModule {}
