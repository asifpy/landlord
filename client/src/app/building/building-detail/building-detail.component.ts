import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { BUILDINGS } from '../sample.data'

enum displayDetailsEnum {
	Details = 0,
	Apartments = 1
}

@Component({
  selector: 'building-detail',
  templateUrl: './building-detail.component.html',
  //styleUrls: ['./building.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BuildingDetailComponent implements OnInit {
	building;
	displayView: displayDetailsEnum;
	displayAction = displayDetailsEnum;

	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		this.displayView = this.displayAction.Details
		let id = this.route.parent.snapshot.params["id"]
		this.building = BUILDINGS[id]
	}

	changeView(view: displayDetailsEnum) {
		this.displayView = view
	}

	

}
