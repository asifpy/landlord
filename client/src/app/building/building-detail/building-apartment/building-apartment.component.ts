import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BUILDINGS } from '..//..//sample.data';

@Component({
  selector: 'app-building-apartment',
  templateUrl: './building-apartment.component.html',
  styleUrls: ['./building-apartment.component.css']
})
export class BuildingApartmentComponent implements OnInit {

  apartments;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

  	let id = +this.route.parent.snapshot.params.id
  	this.apartments = BUILDINGS[id]['apartments']
  }

}
