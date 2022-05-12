import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() {}

  whatsapp() {
    { window.open('https://wa.me/+2348037094992'); }
  }


}
