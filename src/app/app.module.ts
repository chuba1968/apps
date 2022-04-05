import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SwiperModule } from 'swiper/angular';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { enterAnimation } from './animations/nav-animation';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, Ng2SearchPipeModule, SwiperModule, LazyLoadImageModule, IonicModule.forRoot({
    navAnimation: enterAnimation
  }), AppRoutingModule, provideFirebaseApp(() => initializeApp(environment.firebase)), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
