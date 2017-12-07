import { Routes } from '@angular/router';


import { BuildingDetailComponent } from './building-detail/building-detail.component';
import { BuildingComponent } from './building.component';


export const BuildingAppRoutes: Routes = [
	{ path: '', component: BuildingComponent },
	{ path: 'detail', component: BuildingDetailComponent }
];