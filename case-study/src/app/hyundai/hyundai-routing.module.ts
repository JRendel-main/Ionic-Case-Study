import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HyundaiPage } from './hyundai.page';

const routes: Routes = [
  {
    path: '',
    component: HyundaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HyundaiPageRoutingModule {}
