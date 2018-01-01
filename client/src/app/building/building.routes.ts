import { Routes } from '@angular/router';

import { BuildingComponent } from './building.component';
import { BuildingDetailComponent } from './building-detail/building-detail.component';
import { BuildingApartmentComponent } from './building-detail/building-apartment/building-apartment.component';
import { BuildingOverviewComponent } from './building-detail/building-overview/building-overview.component';
import { BuildingCreateUpdateComponent } from './building-create-update/building-create-update.component';

export const BuildingAppRoutes: Routes = [
  { path: '', component: BuildingComponent },
  { path: 'create', component: BuildingCreateUpdateComponent },

  { path: ':id', component: BuildingDetailComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: BuildingOverviewComponent },
      { path: 'apartments', component: BuildingApartmentComponent }
    ]
  },
  { path: ':id/update', component: BuildingCreateUpdateComponent}
];
