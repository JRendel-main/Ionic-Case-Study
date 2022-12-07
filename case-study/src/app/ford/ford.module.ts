import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FordPageRoutingModule } from './ford-routing.module';

import { FordPage } from './ford.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FordPageRoutingModule
  ],
  declarations: [FordPage]
})
export class FordPageModule {}
