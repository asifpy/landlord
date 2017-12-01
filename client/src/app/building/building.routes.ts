import { Routes } from '@angular/router';


import { BuildingListComponent } from './building-list/building-list.component';
import { BuildingDetailComponent } from './building-detail/building-detail.component';


export const BuildingAppRoutes: Routes = [
	{ path: '', component: BuildingListComponent },
	{ path: 'detail', component: BuildingDetailComponent }
];