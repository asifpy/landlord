import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { IBuilding } from '../../shared/interfaces';
import { TrackByService } from '../../core/services/trackby.service';

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BuildingListComponent {

  constructor(private trackByService: TrackByService) { }

  @Input() buildings: IBuilding[] = [];

}
