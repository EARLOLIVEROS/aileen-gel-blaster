import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  // Future routes:
  // { path: 'login', loadComponent: () => import('./pages/auth/login.component').then(m => m.LoginComponent) },
  // { path: 'admin', loadComponent: () => import('./pages/admin/admin.component').then(m => m.AdminComponent) },
  {
    path: '**',
    redirectTo: ''
  }
];
