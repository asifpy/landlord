import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


import { IBuilding } from '../../shared/interfaces';
import { BuildingService } from '../../core/services/building.service';

@Component({
  selector: 'app-building-create-update',
  templateUrl: './building-create-update.component.html',
  styleUrls: ['./building-create-update.component.css']
})
export class BuildingCreateUpdateComponent implements OnInit {

  building: IBuilding;
  buildingForm: FormGroup;
  title = 'Create Building';

  constructor(
    private buildingService: BuildingService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    // create model driven form
    this.buildingForm = this.fb.group({
      name: ['', Validators.required],
      number: ['', Validators.required]
    });

    // check if building update
    if ('id' in this.route.snapshot.params) {
      this.title = 'Update Building';
      const id = +this.route.snapshot.params.id;
      this.buildingService.getBuilding(id).subscribe(
        (response: IBuilding) => {
          this.prepopulateBuildingForm(response);
          this.building = response;
        });
    }
  }

  // pre-populate form with building instance
  prepopulateBuildingForm(building: IBuilding) {
    this.buildingForm.get('name').setValue(building.name);
    this.buildingForm.get('number').setValue(building.number);
  }

  // create new building
  createBuilding() {
    this.buildingService.createBuilding(
      this.buildingForm.value).subscribe(
      (building: IBuilding) => {
        if (building) {
          this.router.navigate(['/buildings']);
        }
      }
    );
  }

  // update building
  updateBuilding() {
    this.buildingService.updateBuilding(
      this.building.id,
      this.buildingForm.value
    ).subscribe(
      (building: IBuilding) => {
        if (building) {
          this.router.navigate(['/buildings', building.id]);
        }
      }
    );
  }

  // handel form submission
  saveBuilding() {
    if (this.buildingForm.valid) {
      if (this.building) {
        // update building
        this.updateBuilding();
      } else {
        // create building instance
        this.createBuilding();
      }
    }
  }

}
