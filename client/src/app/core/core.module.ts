import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';
import { BuildingService } from './services/building.service';
import { ApartmentService } from './services/apartment.service';
import { TenantService } from './services/tenant.service';
import { HandleErrorService } from './services/errorlog.service';
import { AuthService } from './services/auth.service';
import { FormFieldErrorComponent } from './form-field-error/form-field-error.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  imports: [RouterModule],
  declarations: [NavbarComponent, FormFieldErrorComponent],
  exports: [
    NavbarComponent
  ],
  providers: [
    BuildingService,
    ApartmentService,
    TenantService,
    AuthService,
    HandleErrorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {

  // // this will guarantee that only one instance of the building/apartment is added to the root module.
  // // When the CoreModule is loaded (even lazy loaded), no new instance of that service is going to
  // // be added to the child injector.
  // static forRoot(): ModuleWithProviders {
  //  return {
  //    ngModule: CoreModule,
 //      providers: [BuildingService, ApartmentService]
 //    }
 //  }
}
