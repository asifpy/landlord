import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { IBuilding } from '../../shared/interfaces';

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BuildingListComponent {

  constructor() { }

  @Input() buildings: IBuilding[] = [];

}
