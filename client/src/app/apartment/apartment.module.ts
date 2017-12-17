/* angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* apartment imports */
import { ApartmentListComponent } from './apartment-list/apartment-list.component';
import { ApartmentRoutes } from './apartment.routing';

@NgModule({
  imports: [
    RouterModule.forChild(ApartmentRoutes),
    CommonModule
  ],
  declarations: [ApartmentListComponent]
})
export class ApartmentModule { }
