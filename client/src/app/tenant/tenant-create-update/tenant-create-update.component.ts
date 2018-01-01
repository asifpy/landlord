import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';

import { IApartment, IBuilding, ITenant } from '../../shared/interfaces';
import { BuildingService } from '../../core/services/building.service';
import { ApartmentService } from '../../core/services/apartment.service';
import { TenantService } from '../../core/services/tenant.service';


@Component({
  selector: 'app-tenant-create-update',
  templateUrl: './tenant-create-update.component.html',
  styleUrls: ['./tenant-create-update.component.css']
})
export class TenantCreateUpdateComponent implements OnInit {

	buildings: IBuilding[];
	apartments: IApartment[];
	filteredApartments: IApartment[];
	tenant: ITenant;
	tenantForm: FormGroup;
	title: string = "Create Tenant";
	showApartment: boolean = false;

  constructor(
  	private router: Router,
  	private route: ActivatedRoute,
  	private fb: FormBuilder,

  	private buildingService: BuildingService,
  	private apartmentService: ApartmentService,
  	private tenantService: TenantService,

  ) { }

  ngOnInit() {

  	this.tenantForm = this.fb.group({
  		name: ['', Validators.required],
  		email: ['', Validators.required],
  		mobile: ['', Validators.required],
  		building_id: ['', Validators.required],
  		apartment_id: ['', Validators.required],
  		//is_active: ['', Validators.required]
  	})

  	// get buillldings for select form control
  	this.buildingService.getBuildings()
  		.subscribe((response:IBuilding[]) => this.buildings = response)

  	// get apartments
  	this.apartmentService.getApartments()
  		.subscribe(response => this.apartments = response)

  	// check if apartment is for update
  	if('id' in this.route.snapshot.params) {
  		this.title = "Update Tenant"
  		this.showApartment = true;

  		let id = +this.route.snapshot.params.id
  		this.tenantService.getTenant(id).subscribe(
  			(response: ITenant) => {
  				this.prepopulateTenantForm(response);
  				this.tenant = response
  			})
  	}
  }

  // pre-populate form with tenant instance
  prepopulateTenantForm(tenant: ITenant) {
  	this.tenantForm.get('name').setValue(tenant.name)
  	this.tenantForm.get('email').setValue(tenant.email)
  	this.tenantForm.get('mobile').setValue(tenant.mobile)
  	//this.tenantForm.get('is_active').setValue(tenant.isActive)
  	this.tenantForm.get('building_id').setValue(tenant.building.id)
  	this.tenantForm.get('apartment_id').setValue(tenant.apartment.id)
  }

  onSelect(buildingId) {
  	this.showApartment = true;
  	this.filteredApartments = this.apartments.filter(apartment => apartment.building.id === +buildingId);

    // this.apartmentService.getApartments()
    // 	.map((apartments: IApartment[]) => {
  		// 	return apartments.filter(
  		// 		(apartment: IApartment) => apartment.building.id === +buildingId
  		// 	);
  		// })
    // 	.subscribe(response => this.apartments = response)
  }

  // create new tenant
  createTenant() {
  	this.tenantService.createTenant(
  		this.tenantForm.value).subscribe(
  		(tenant: ITenant) => {
  			if(tenant) {
  				this.router.navigate(['/tenants']);
  			}
  		}
  	)
  }

  // update tenant
  updateTenant() {
  	this.tenantService.updateTenant(
  		this.tenant.id,
  		this.tenantForm.value
  	).subscribe(
  		(tenant: ITenant) => {
  			if(tenant) {
  				this.router.navigate(['/tenants']);
  			}
  		}
  	)
  }

  // hande form submission
  saveTenant() {
  	if(this.tenantForm.valid) {
  		if(this.tenant) { 
  			// update tenant
  			this.updateTenant()
  		} else {
  			//create tenant instance
  			this.createTenant()
  		}
  	}
  }

}
