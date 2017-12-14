import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BuildingService } from '../../../core/services/building.service';
import { IApartment } from '../../../shared/interfaces';

@Component({
  selector: 'app-building-apartment',
  templateUrl: './building-apartment.component.html',
  styleUrls: ['./building-apartment.component.css']
})
export class BuildingApartmentComponent implements OnInit {

  apartments: IApartment[] = [];
  constructor(private buildingService: BuildingService, private route: ActivatedRoute) { }

  ngOnInit() {

  	let id = +this.route.parent.snapshot.params.id;
  	this.buildingService.getBuildingApartments(id)
  		.subscribe(response => this.apartments = response)
  }

}
