import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginAppRoutes } from './login.routes'
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
  	RouterModule.forChild(LoginAppRoutes),
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
