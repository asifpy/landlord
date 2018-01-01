/* angular imports */
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/* building imports */
import { BuildingCardComponent } from './building-card/building-card.component';
import { BuildingDetailComponent } from './building-detail/building-detail.component';
import { BuildingListComponent } from './building-list/building-list.component';
import { BuildingComponent } from './building.component';
import { BuildingAppRoutes } from './building.routes';
import { BuildingApartmentComponent } from './building-detail/building-apartment/building-apartment.component';
import { BuildingOverviewComponent } from './building-detail/building-overview/building-overview.component';
import { BuildingCreateUpdateComponent } from './building-create-update/building-create-update.component';


@NgModule({
  imports: [
    RouterModule.forChild(BuildingAppRoutes),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
    BuildingCardComponent,
    BuildingDetailComponent,
    BuildingListComponent,
    BuildingComponent,
    BuildingApartmentComponent,
    BuildingOverviewComponent,
    BuildingCreateUpdateComponent,
  ],
  providers: [],
  exports: [CommonModule]
})
export class BuildingModule {}
