import { Component } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { IonicSlides } from '@ionic/angular';
import {
  BannerAd,
  InterstitialAd,
  RewardedAd,
  RewardedInterstitialAd,
} from '@admob-plus/capacitor';

SwiperCore.use([Autoplay, Keyboard, Scrollbar, Zoom, IonicSlides]);
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  type: string='friends';
  //this code is necessary



  filterTerm: string;

  constructor() { }


  async showBannerAd() {
    const banner = new BannerAd({
      adUnitId: 'ca-app-pub-3940256099942544/6300978111',
      position: 'bottom',
    });
    await banner.load();
  }

  async showInterstitialAd() {
    const interstitial = new InterstitialAd({
      adUnitId: 'ca-app-pub-3940256099942544/1033173712',
    });
    await interstitial.load();
    await interstitial.show();
  }

  async showRewardedAd() {
    const rewarded = new RewardedAd({
      adUnitId: 'ca-app-pub-3940256099942544/5224354917',
    });
    await rewarded.load();
    await rewarded.show();
  }

  async showRewardedInterstitialAd() {
    const rewarded = new RewardedInterstitialAd({
      adUnitId: 'ca-app-pub-3940256099942544/6978759866',
    });
    await rewarded.load();
    await rewarded.show();
  }


  }



