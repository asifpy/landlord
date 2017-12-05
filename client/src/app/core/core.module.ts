import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [NavbarComponent],
  providers: [],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule {}