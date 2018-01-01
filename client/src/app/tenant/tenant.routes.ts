import { Routes } from '@angular/router';

import { TenantListComponent } from './tenant-list/tenant-list.component';
import { TenantCreateUpdateComponent } from './tenant-create-update/tenant-create-update.component';

export const TenantRoutes: Routes = [
	{ path: '', component: TenantListComponent },
	{ path: 'create', component: TenantCreateUpdateComponent },
	{ path: ':id/update', component: TenantCreateUpdateComponent },
];