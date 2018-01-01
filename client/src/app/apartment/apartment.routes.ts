import { Routes } from '@angular/router';

import { ApartmentListComponent } from './apartment-list/apartment-list.component';
import { TenantHistoryComponent } from './tenant-history/tenant-history.component';
import { ApartmentCreateUpdateComponent } from './apartment-create-update/apartment-create-update.component';

export const ApartmentRoutes: Routes = [
  { path: '', component: ApartmentListComponent },
  { path: 'create', component: ApartmentCreateUpdateComponent },
  { path: ':id/tenants', component: TenantHistoryComponent},
  { path: ':id/update', component: ApartmentCreateUpdateComponent}
];
