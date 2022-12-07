import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  menuType: string = 'expand';
  menuPosition: string = 'left';
  menuWidth: number = 250;
  menuReveal: boolean = true;
  menuPush: boolean = true;
  menuOverlap: boolean = false;
  menuShrink: boolean = false;
  menuStatic: boolean = false;
  menuStaticBack: boolean = false;


  constructor() {}

}
