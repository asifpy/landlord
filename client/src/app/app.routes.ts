import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
	{ path: '', pathMatch:'full', redirectTo: '/buildings' },
	{ path: 'buildings', loadChildren: './building/building.module#BuildingModule' },
	// { path: 'apartments', loadChildren: './apartment/apartment.module#ApartmentModule'},
];

