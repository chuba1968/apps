import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SwiperModule } from 'swiper/angular';

import { Tab2PageRoutingModule } from './tab2-routing.module';

@NgModule({
  imports: [
    IonicModule,
	Ng2SearchPipeModule,
	LazyLoadImageModule,
	SwiperModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
