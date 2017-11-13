import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumComponent } from './components/resum/resum.component';

export const Router: Routes = [
  { path: 'ResumComponent', component: ResumComponent }
];
export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(Router);
