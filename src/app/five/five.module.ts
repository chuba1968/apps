import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FivePageRoutingModule } from './five-routing.module';

import { FivePage } from './five.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FivePageRoutingModule
  ],
  declarations: [FivePage]
})
export class FivePageModule {}
