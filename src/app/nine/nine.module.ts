import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NinePageRoutingModule } from './nine-routing.module';

import { NinePage } from './nine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NinePageRoutingModule
  ],
  declarations: [NinePage]
})
export class NinePageModule {}
