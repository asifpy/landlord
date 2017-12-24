import { Routes } from '@angular/router';

import { ApartmentListComponent } from './apartment-list/apartment-list.component';
import { TenantHistoryComponent } from './tenant-history/tenant-history.component';

export const ApartmentRoutes: Routes = [
	{ path: '', component: ApartmentListComponent },
	{ path: 'apartments/:id/tenants', component: TenantHistoryComponent}
];