import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { IBuilding } from '../../shared/interfaces';
import { TrackByService } from '../../core/services/trackby.service';

@Component({
  selector: 'app-building-card',
  templateUrl: './building-card.component.html',
  styleUrls: ['./building-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BuildingCardComponent {

  constructor(public trackByService: TrackByService) { }

  @Input() buildings: IBuilding[] = [];
}
