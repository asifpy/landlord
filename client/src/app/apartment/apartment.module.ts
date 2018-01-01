/* angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

/* apartment imports */
import { ApartmentListComponent } from './apartment-list/apartment-list.component';
import { ApartmentRoutes } from './apartment.routes';
import { TenantHistoryComponent } from './tenant-history/tenant-history.component';
import { ApartmentCreateUpdateComponent } from './apartment-create-update/apartment-create-update.component';

@NgModule({
  imports: [
    RouterModule.forChild(ApartmentRoutes),
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ApartmentListComponent,
    TenantHistoryComponent,
    ApartmentCreateUpdateComponent
  ]
})
export class ApartmentModule { }
