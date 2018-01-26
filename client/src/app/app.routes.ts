import { Routes } from '@angular/router';

import { AuthGuardService } from './core/services/auth-gaurd.service'

export const AppRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/buildings' },
  {
    path: 'buildings',
    loadChildren: './building/building.module#BuildingModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'apartments',
    loadChildren: './apartment/apartment.module#ApartmentModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'tenants',
    loadChildren: './tenant/tenant.module#TenantModule',
    canActivate: [AuthGuardService]
  },
];

