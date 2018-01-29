import { Component, OnInit } from '@angular/core';

import { ApartmentService } from '../../core/services/apartment.service';
import { TrackByService } from '../../core/services/trackby.service';
import { IApartment } from '../../shared/interfaces';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
})
export class ApartmentListComponent implements OnInit {

  title: string;
  apartments: IApartment[] = [];

  constructor(
    private apartmentService: ApartmentService,
    private trackByService: TrackByService
  ) { }

  ngOnInit() {
    this.title = 'Apartments';

    this.apartmentService.getApartments()
      .subscribe(response => this.apartments = response);
  }
}
