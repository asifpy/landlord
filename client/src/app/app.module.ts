/* angular imports */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

/* ng-bootstrap */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/* app specific imports */
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

/* modules */
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes),

    NgbModule.forRoot(),

    CoreModule,
    LoginModule
  ],
  exports : [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

