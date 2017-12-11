import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BUILDINGS } from '../../sample.data'

@Component({
  selector: 'building-overview',
  templateUrl: './building-overview.component.html',
  styleUrls: ['./building-overview.component.css']
})
export class BuildingOverviewComponent implements OnInit {

	building;
	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		let id = this.route.parent.params['id']
		this.building = BUILDINGS[id]
  }

}
