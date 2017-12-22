import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { BuildingService } from './services/building.service';
import { ApartmentService } from './services/apartment.service';
import { FormFieldErrorComponent } from './form-field-error/form-field-error.component';

@NgModule({
  declarations: [NavbarComponent, FormFieldErrorComponent],
  providers: [
  	BuildingService,
  	ApartmentService
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule {}