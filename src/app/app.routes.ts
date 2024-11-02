import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',

    loadComponent: () =>
      import('./feacture/layout/layout.component').then(
        (m) => m.LayoutComponent
      ),
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./feacture/home/components/home/home.component').then(
            (m) => m.HomeComponent
          ),
      },
    ],
  },
];
