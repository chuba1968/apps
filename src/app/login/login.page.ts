import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import {
  BannerAd,
  InterstitialAd,
  RewardedAd,
  RewardedInterstitialAd,
} from '@admob-plus/capacitor';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,
    private router: Router
  ) {}

  // Easy access for form fields
  get email() {
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async register() {
    const loading = await this.loadingController.create();
    await loading.present();

    const user = await this.authService.register(this.credentials.value);
    await loading.dismiss();

    if (user) {
      this.router.navigateByUrl('tabs', { replaceUrl: true });
    } else {
      this.showAlert('Registration failed', 'Please try again!');
    }
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    const user = await this.authService.login(this.credentials.value);
    await loading.dismiss();

    if (user) {
      this.router.navigateByUrl('tabs', { replaceUrl: true });
    } else {
      this.showAlert('Login failed', 'Please try again!');
    }
  }

  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }



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
