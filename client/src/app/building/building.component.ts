import { Component, OnInit } from '@angular/core';

import { BUILDINGS } from './sample.data'

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
	buildings;

	constructor() { }

	ngOnInit() {
		this.title = "Buildings"
		this.displayView = displayViewEnum.Card
		this.buildings = BUILDINGS
	}

	changeDisplayView(view: displayViewEnum) {
		this.displayView = view
	}
}