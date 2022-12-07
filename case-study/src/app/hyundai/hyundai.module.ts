import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HyundaiPageRoutingModule } from './hyundai-routing.module';

import { HyundaiPage } from './hyundai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HyundaiPageRoutingModule
  ],
  declarations: [HyundaiPage]
})
export class HyundaiPageModule {}
