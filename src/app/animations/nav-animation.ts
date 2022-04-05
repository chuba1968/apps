import { AnimationController, Animation } from '@ionic/angular';

export const enterAnimation = (baseEl: HTMLElement, opts?: any): Animation =>{
  const DURATION = 300;

  console.log('baseEl:', baseEl);
  console.log('baseEl:', opts);



  const animateCtrl = new AnimationController();
  if (opts.direction === 'forward') {
     return animateCtrl.create()
    .addElement(opts.enteringEl)
    .duration(DURATION)
    .easing('ease-in')
    .fromTo('opacity', 0, 1);
  } else {
    const rootAnimation = animateCtrl.create()
    .addElement(opts.enteringEl)
    .duration(DURATION)
    .easing('ease-in')
    .fromTo('opacity', 0, 1);

    const leavingAnimation = animateCtrl.create()
    .addElement(opts.leavingEl)
    .duration(DURATION)
    .easing('ease-in')
    .fromTo('opacity', 1, 0);

    return animateCtrl.create().addAnimation([rootAnimation,leavingAnimation]);

  }


}
