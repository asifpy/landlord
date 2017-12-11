import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingApartmentComponent } from './building-apartment.component';

describe('BuildingApartmentComponent', () => {
  let component: BuildingApartmentComponent;
  let fixture: ComponentFixture<BuildingApartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingApartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
