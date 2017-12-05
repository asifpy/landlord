import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { BuildingModule } from './building/building.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    //NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NgbModule.forRoot(),

    CoreModule,
    BuildingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
