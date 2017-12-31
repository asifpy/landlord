import { Component, OnInit } from '@angular/core';


import { TenantService } from '../../core/services/tenant.service';
import { ITenant } from '../../shared/interfaces';

@Component({
  selector: 'tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrls: ['./tenant-list.component.css']
})
export class TenantListComponent implements OnInit {

	tenants:ITenant[];

  constructor(private tenantService:TenantService) { }

  ngOnInit() {
  	this.tenantService.getTenants().subscribe(
  		response => this.tenants = response 
  	)
  }

}
