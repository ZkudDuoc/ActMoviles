import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'datos-cli',
    loadChildren: () => import('./pages/datos-cli/datos-cli.module').then( m => m.DatosCliPageModule)
  },
  {
    path: 'boleta',
    loadChildren: () => import('./pages/boleta/boleta.module').then( m => m.BoletaPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'datos-cli',
    loadChildren: () => import('./pages/datos-cli/datos-cli.module').then( m => m.DatosCliPageModule)
  },
  {
    path: 'boleta',
    loadChildren: () => import('./pages/boleta/boleta.module').then( m => m.BoletaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
