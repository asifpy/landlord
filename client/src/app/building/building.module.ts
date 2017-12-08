/* angular imports */
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/* building imports */
import { BuildingCardComponent } from './building-card/building-card.component';
import { BuildingDetailComponent } from './building-detail/building-detail.component';
import { BuildingListComponent } from './building-list/building-list.component';
import { BuildingComponent } from './building.component';
import { BuildingAppRoutes } from './building.routes';


@NgModule({
  imports: [
    RouterModule.forRoot(BuildingAppRoutes),
    CommonModule
  ],
  declarations: [
    BuildingCardComponent,
    BuildingDetailComponent,
    BuildingListComponent,
    BuildingComponent,
  ],
  providers: []
})
export class BuildingModule {}