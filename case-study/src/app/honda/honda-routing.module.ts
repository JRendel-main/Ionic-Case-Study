import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HondaPage } from './honda.page';

const routes: Routes = [
  {
    path: '',
    component: HondaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HondaPageRoutingModule {}
