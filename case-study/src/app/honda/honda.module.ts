import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HondaPageRoutingModule } from './honda-routing.module';

import { HondaPage } from './honda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HondaPageRoutingModule
  ],
  declarations: [HondaPage]
})
export class HondaPageModule {}
