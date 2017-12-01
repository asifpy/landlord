import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BuildingListComponent } from './building-list/building-list.component';
import { BuildingDetailComponent } from './building-detail/building-detail.component';
import { BuildingAppRoutes } from './building.routes';
// import { SharedModule } from '../shared';


@NgModule({
  imports: [
    RouterModule.forRoot(BuildingAppRoutes),
  ],
  declarations: [
    BuildingListComponent,
    BuildingDetailComponent
  ],
  providers: []
})
export class BuildingModule {}