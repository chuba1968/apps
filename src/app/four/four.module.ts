import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FourPageRoutingModule } from './four-routing.module';

import { FourPage } from './four.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FourPageRoutingModule
  ],
  declarations: [FourPage]
})
export class FourPageModule {}
