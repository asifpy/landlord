import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'building-detail',
  templateUrl: './building-detail.component.html',
  encapsulation: ViewEncapsulation.None
})
export class BuildingDetailComponent {
	
	building_id;
	
	constructor(private route: ActivatedRoute) {
		this.building_id = +this.route.snapshot.params["id"]
	}
}
