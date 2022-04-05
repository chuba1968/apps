import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaritimePageRoutingModule } from './maritime-routing.module';

import { MaritimePage } from './maritime.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaritimePageRoutingModule
  ],
  declarations: [MaritimePage]
})
export class MaritimePageModule {}
