import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaritimePage } from './maritime.page';

const routes: Routes = [
  {
    path: '',
    component: MaritimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaritimePageRoutingModule {}
