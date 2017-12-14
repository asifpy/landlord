import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { BuildingService } from './services/building.service';

@NgModule({
  declarations: [NavbarComponent],
  providers: [
  	BuildingService
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule {}