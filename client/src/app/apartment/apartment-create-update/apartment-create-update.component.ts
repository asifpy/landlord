import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { IApartment, IBuilding } from '../../shared/interfaces';
import { ApartmentService } from '../../core/services/apartment.service';
import { BuildingService } from '../../core/services/building.service';

@Component({
  selector: 'app-apartment-create-update',
  templateUrl: './apartment-create-update.component.html',
  styleUrls: ['./apartment-create-update.component.css']
})
export class ApartmentCreateUpdateComponent implements OnInit {

	apartment: IApartment;
	apartmentForm: FormGroup;
	buildings: IBuilding[];
	title: string = "Create Apartment";

  constructor(
  	private router: Router,
  	private route: ActivatedRoute,
  	private fb: FormBuilder,
  	private buildingService: BuildingService,
  	private apartmentService: ApartmentService
  ) { }

  ngOnInit() {

  	// create model driven form
  	this.apartmentForm = this.fb.group({
  		number: ['', Validators.required],
  		building_id: ['', Validators.required]
  	})

  	// get buillldings for select form control
  	this.buildingService.getBuildings().subscribe(
  		response => this.buildings = response
  	)

  	// check if apartment is for update
  	if('id' in this.route.snapshot.params) {
  		this.title = "Update Apartment"
  		let id = +this.route.snapshot.params.id
  		this.apartmentService.getApartment(id).subscribe(
  			(response: IApartment) => {
  				this.prepopulateApartmentForm(response);
  				this.apartment = response
  			})
  	}
  }

  // pre-populate form with building instance
  prepopulateApartmentForm(apartment: IApartment) {
  	this.apartmentForm.get('number').setValue(apartment.number)
  	this.apartmentForm.get('building_id').setValue(apartment.building.id)
  }

  // create new apartment
  createApartment() {
  	this.apartmentService.createApartment(
  		this.apartmentForm.value).subscribe(
  		(apartment: IApartment) => {
  			if(apartment) {
  				this.router.navigate(['/apartments']);
  			}
  		}
  	)
  }

  // update apartment
  updateApartment() {
  	this.apartmentService.updateApartment(
  		this.apartment.id,
  		this.apartmentForm.value
  	).subscribe(
  		(apartment: IApartment) => {
  			if(apartment) {
  				this.router.navigate(['/apartments']);
  			}
  		}
  	)
  }

  // hande form submission
  saveApartment() {
  	if(this.apartmentForm.valid) {
  		if(this.apartment) { 
  			// update apartment
  			this.updateApartment()
  		} else {
  			//create apartment instance
  			this.createApartment()
  		}
  	}
  }

}
