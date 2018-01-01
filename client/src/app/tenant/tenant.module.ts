import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { TenantRoutes } from './tenant.routes';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { TenantCreateUpdateComponent } from './tenant-create-update/tenant-create-update.component';

@NgModule({
  imports: [
    RouterModule.forChild(TenantRoutes),
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [TenantListComponent, TenantCreateUpdateComponent]
})
export class TenantModule { }
