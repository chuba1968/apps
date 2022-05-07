import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThreePageRoutingModule } from './three-routing.module';

import { ThreePage } from './three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThreePageRoutingModule
  ],
  declarations: [ThreePage]
})
export class ThreePageModule {}
