import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'landlord-building-card',
  templateUrl: './building-card.component.html',
  styleUrls: ['./building-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BuildingCardComponent implements OnInit {

  constructor() { }

  @Input() buildings;

  ngOnInit() {
  }

}
