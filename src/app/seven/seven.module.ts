import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SevenPageRoutingModule } from './seven-routing.module';

import { SevenPage } from './seven.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SevenPageRoutingModule
  ],
  declarations: [SevenPage]
})
export class SevenPageModule {}
