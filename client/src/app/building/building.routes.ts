import { Routes } from '@angular/router';

import { BuildingComponent } from './building.component';
import { BuildingDetailComponent } from './building-detail/building-detail.component';
import { BuildingApartmentComponent } from './building-detail/building-apartment/building-apartment.component';
import { BuildingOverviewComponent } from './building-detail/building-overview/building-overview.component';


export const BuildingAppRoutes: Routes = [
	{ path: '', component: BuildingComponent },
	{ path: 'buildings/:id', component: BuildingDetailComponent,
		children: [
			{ path: '', redirectTo: 'overview', pathMatch: 'full' },
			{ path: 'overview', component: BuildingOverviewComponent },
			{ path: 'apartments', component: BuildingApartmentComponent }
		]
	}
];