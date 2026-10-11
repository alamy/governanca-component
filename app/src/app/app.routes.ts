import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'index',
  },
  {
    path: 'index',
    loadComponent: () =>
      import('./pages/index/index').then((module) => module.IndexPage),
  },
  {
    path: 'formulario',
    loadComponent: () =>
      import('./pages/formulario/formulario').then((module) => module.FormularioPage),
  },
  {
    path: '**',
    redirectTo: 'index',
  },
];
