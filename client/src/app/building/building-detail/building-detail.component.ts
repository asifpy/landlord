import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-building-detail',
  templateUrl: './building-detail.component.html',
  encapsulation: ViewEncapsulation.None
})
export class BuildingDetailComponent {

  building_id: number;

  constructor(private route: ActivatedRoute) {
    this.building_id = +this.route.snapshot.params['id'];
  }
}
