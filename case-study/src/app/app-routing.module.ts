import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'toyota',
    loadChildren: () => import('./toyota/toyota.module').then( m => m.ToyotaPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'honda',
    loadChildren: () => import('./honda/honda.module').then( m => m.HondaPageModule)
  },
  {
    path: 'ford',
    loadChildren: () => import('./ford/ford.module').then( m => m.FordPageModule)
  },
  {
    path: 'nissan',
    loadChildren: () => import('./nissan/nissan.module').then( m => m.NissanPageModule)
  },
  {
    path: 'bmw',
    loadChildren: () => import('./bmw/bmw.module').then( m => m.BmwPageModule)
  },
  {
    path: 'mercedes',
    loadChildren: () => import('./mercedes/mercedes.module').then( m => m.MercedesPageModule)
  },
  {
    path: 'audi',
    loadChildren: () => import('./audi/audi.module').then( m => m.AudiPageModule)
  },
  {
    path: 'volkswagen',
    loadChildren: () => import('./volkswagen/volkswagen.module').then( m => m.VolkswagenPageModule)
  },
  {
    path: 'hyundai',
    loadChildren: () => import('./hyundai/hyundai.module').then( m => m.HyundaiPageModule)
  },
  {
    path: 'kia',
    loadChildren: () => import('./kia/kia.module').then( m => m.KiaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
