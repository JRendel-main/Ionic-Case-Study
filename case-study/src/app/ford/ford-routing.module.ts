import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FordPage } from './ford.page';

const routes: Routes = [
  {
    path: '',
    component: FordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FordPageRoutingModule {}
