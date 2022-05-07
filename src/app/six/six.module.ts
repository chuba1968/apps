import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SixPageRoutingModule } from './six-routing.module';

import { SixPage } from './six.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SixPageRoutingModule
  ],
  declarations: [SixPage]
})
export class SixPageModule {}
