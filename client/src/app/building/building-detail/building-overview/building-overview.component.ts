import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BuildingService } from '../../../core/services/building.service';
import { IBuilding } from '../../../shared/interfaces';

@Component({
  selector: 'app-building-overview',
  templateUrl: './building-overview.component.html',
  styleUrls: ['./building-overview.component.css']
})
export class BuildingOverviewComponent implements OnInit {

  building: IBuilding;

  constructor(
    private buildingService: BuildingService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.parent.snapshot.params.id;
    this.buildingService.getBuilding(id).subscribe(
      response => this.building = response
    );
  }

}
