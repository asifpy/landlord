import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingOverviewComponent } from './building-overview.component';

describe('BuildingOverviewComponent', () => {
  let component: BuildingOverviewComponent;
  let fixture: ComponentFixture<BuildingOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
