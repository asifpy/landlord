import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TenantRoutes } from './tenant.routes';
import { TenantListComponent } from './tenant-list/tenant-list.component';

@NgModule({
  imports: [
  	RouterModule.forChild(TenantRoutes),
    CommonModule
  ],
  declarations: [TenantListComponent]
})
export class TenantModule { }
