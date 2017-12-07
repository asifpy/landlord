import { Component, OnInit } from '@angular/core';


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

	ngOnInit() {
		this.title = "Buildings"
		this.displayView = displayViewEnum.Card
		this.buildings = [
			{
				'name': 'Building 1',
				'number': '453-2'
			},
			{
				'name': 'Building 2',
				'number': '7783-1'
			},
			{
				'name': 'Building 3',
				'number': '2753-2'
			},
			{
				'name': 'Building 4',
				'number': '6783-1'
			},
			{
				'name': 'Building 5',
				'number': '9933-1'
			},
		]
		
	}

	changeDisplayView(view: displayViewEnum) {
		this.displayView = view
	}
}