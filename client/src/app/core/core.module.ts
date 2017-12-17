import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { BuildingService } from './services/building.service';
import { ApartmentService } from './services/apartment.service';

@NgModule({
  declarations: [NavbarComponent],
  providers: [
  	BuildingService,
  	ApartmentService
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule {}