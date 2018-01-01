import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { IBuilding } from '../../shared/interfaces';

@Component({
  selector: 'app-building-card',
  templateUrl: './building-card.component.html',
  styleUrls: ['./building-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BuildingCardComponent {

  constructor() { }

  @Input() buildings: IBuilding[] = [];
}
