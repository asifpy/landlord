/* angular imports */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

/* ng-bootstrap */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/* app specific imports */
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

/* modules */
import { CoreModule } from './core/core.module';
import { BuildingModule } from './building/building.module';
import { ApartmentModule } from './apartment/apartment.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),

    NgbModule.forRoot(),

    CoreModule,
    BuildingModule,
    ApartmentModule
  ],
  exports : [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
