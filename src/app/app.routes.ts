import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/resume',
    pathMatch: 'full'
  },
  {
    path: 'resume',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  }
];
