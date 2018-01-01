import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { BuildingService } from '../../../core/services/building.service';
import { ApartmentService } from '../../../core/services/apartment.service';
import { IApartment, IBuilding } from '../../../shared/interfaces';

@Component({
  selector: 'app-building-apartment',
  templateUrl: './building-apartment.component.html',
  styleUrls: ['./building-apartment.component.css']
})
export class BuildingApartmentComponent implements OnInit {

  apartments: IApartment[] = [];
  building: IBuilding;

  // access the template reference variable from component
  @ViewChild('createApartmentForm') apartmentForm: NgForm;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private buildingService: BuildingService,
    private apartmentService: ApartmentService) { }

  ngOnInit() {
    this.getBuilding();
  }

  // get building instance, which further will have apartments
  getBuilding() {
    const id = +this.route.parent.snapshot.params.id;
    this.buildingService.getBuilding(id).subscribe(
      response => this.building = response);
  }

  // create new apartment
  createApartment() {
    const postData = this.apartmentForm.value;
    postData['building_id'] = this.building.id;

    this.apartmentService.createApartment(
      postData).subscribe(
      (apartment: IApartment) => {
        if (apartment) {
          // get building instance, which further will have latest apartments
          this.getBuilding();
          this.apartmentForm.reset();
        }
      }
    );
  }

  // handel form submission
  saveApartment() {
    if (this.apartmentForm.valid) {
      // create apartment instance
      this.createApartment();
    }
  }


}
