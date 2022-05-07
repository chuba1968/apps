import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['tabs']);


const routes: Routes = [

  {
    path: '',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then(m => m.TabsPageModule),
      ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'maritime',
    loadChildren: () => import('./maritime/maritime.module').then( m => m.MaritimePageModule)
  },  {
    path: 'two',
    loadChildren: () => import('./two/two.module').then( m => m.TwoPageModule)
  },
  {
    path: 'three',
    loadChildren: () => import('./three/three.module').then( m => m.ThreePageModule)
  },
  {
    path: 'four',
    loadChildren: () => import('./four/four.module').then( m => m.FourPageModule)
  },
  {
    path: 'five',
    loadChildren: () => import('./five/five.module').then( m => m.FivePageModule)
  },
  {
    path: 'six',
    loadChildren: () => import('./six/six.module').then( m => m.SixPageModule)
  },
  {
    path: 'seven',
    loadChildren: () => import('./seven/seven.module').then( m => m.SevenPageModule)
  },
  {
    path: 'eight',
    loadChildren: () => import('./eight/eight.module').then( m => m.EightPageModule)
  },
  {
    path: 'nine',
    loadChildren: () => import('./nine/nine.module').then( m => m.NinePageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
