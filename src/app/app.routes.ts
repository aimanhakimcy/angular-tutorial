import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/anatomy/anatomy.component').then(m => m.AnatomyComponent)
    },
    {
        path: 'anatomy',
        loadComponent: () => import('./features/anatomy/anatomy.component').then(m => m.AnatomyComponent)
    },
    {
        path: 'update-component',
        loadComponent: () => import('./features/update-component/update-component.component').then(m => m.UpdateComponentComponent)
    },
    {
        path: 'component-composition',
        loadComponent: () => import('./features/component-composition/component-composition.component').then(m => m.ComponentCompositionComponent),
    },
    { path: '**', redirectTo: '' }
];
