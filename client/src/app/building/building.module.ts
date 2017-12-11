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
import { BuildingApartmentComponent } from './building-detail/building-apartment/building-apartment.component';
import { BuildingOverviewComponent } from './building-detail/building-overview/building-overview.component';


@NgModule({
  imports: [
    RouterModule.forChild(BuildingAppRoutes),
    CommonModule
  ],
  declarations: [
    BuildingCardComponent,
    BuildingDetailComponent,
    BuildingListComponent,
    BuildingComponent,
    BuildingApartmentComponent,
    BuildingOverviewComponent,
  ],
  providers: []
})
export class BuildingModule {}