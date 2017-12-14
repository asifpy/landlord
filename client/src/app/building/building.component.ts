import { Component, OnInit } from '@angular/core';

import { BUILDINGS } from './sample.data'
import { BuildingService } from '../core/services/building.service';
import { IBuilding } from '../shared/interfaces';


enum displayViewEnum {
	Card = 0,
	Grid = 1
}

@Component({
	selector: 'lanlord-building',
	templateUrl: './building.component.html',
})
export class BuildingComponent implements OnInit {
	title: string;
	displayView: displayViewEnum;
	displayViewEnum = displayViewEnum;
	buildings: IBuilding[] = [];

	constructor(private buildingService: BuildingService) { }

	ngOnInit() {
		this.title = "Buildings"
		this.displayView = displayViewEnum.Card

		this.buildingService.getBuildings()
			.subscribe(response =>this.buildings=response)
	}

	changeDisplayView(view: displayViewEnum) {
		this.displayView = view
	}
}