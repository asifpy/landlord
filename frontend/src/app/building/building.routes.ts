import { Routes } from '@angular/router';


import { BuildingListComponent } from './building-list.component';
import { BuildingDetailComponent } from './building-detail.component';


export const BuildingAppRoutes: Routes = [
	{ path: '', component: BuildingListComponent }
	{ path: 'detail', component: BuildingDetailComponent }
];