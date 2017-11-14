import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BuildingListComponent } from './building-list.component';
import { BuildingAppRoutes } from './building.routes';
// import { SharedModule } from '../shared';


@NgModule({
  imports: [
    RouterModule.forRoot(BuildingAppRoutes),
  ],
  declarations: [
    BuildingListComponent
  ],
  providers: []
})
export class BuildingModule {}