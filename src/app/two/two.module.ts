import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TwoPageRoutingModule } from './two-routing.module';

import { TwoPage } from './two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TwoPageRoutingModule
  ],
  declarations: [TwoPage]
})
export class TwoPageModule {}
