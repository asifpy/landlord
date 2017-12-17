import { Component, OnInit } from '@angular/core';

import { ApartmentService } from '../../core/services/apartment.service';
import { IApartment } from '../../shared/interfaces';

@Component({
	selector: 'lanlord-apartment-list',
	templateUrl: './apartment-list.component.html',
})
export class ApartmentListComponent implements OnInit {
	title: string;
	apartments: IApartment[] = [];

	constructor(private apartmentService: ApartmentService) { }

	ngOnInit() {
		this.title = "Apartments"

		this.apartmentService.getApartments()
			.subscribe(response =>this.apartments=response)
	}
}