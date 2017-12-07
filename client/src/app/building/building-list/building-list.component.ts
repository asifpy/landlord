import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'landlord-building-card',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BuildingListComponent implements OnInit {

  constructor() { }

  @Input() buildings;

  ngOnInit() {
  }

}
