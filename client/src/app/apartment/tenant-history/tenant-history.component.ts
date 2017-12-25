import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApartmentService } from '../../core/services/apartment.service';
import { IApartment } from '../../shared/interfaces';

@Component({
  selector: 'app-tenant-history',
  templateUrl: './tenant-history.component.html',
  styleUrls: ['./tenant-history.component.css']
})
export class TenantHistoryComponent implements OnInit {

	apartment: IApartment

  constructor(
    private apartmentService: ApartmentService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id
    this.apartmentService.getApartment(id).subscribe(
      response => this.apartment = response
    )
  }
}
