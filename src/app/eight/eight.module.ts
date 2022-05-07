import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EightPageRoutingModule } from './eight-routing.module';

import { EightPage } from './eight.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EightPageRoutingModule
  ],
  declarations: [EightPage]
})
export class EightPageModule {}
