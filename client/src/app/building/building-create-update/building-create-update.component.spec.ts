import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingCreateUpdateComponent } from './building-create-update.component';

describe('BuildingCreateUpdateComponent', () => {
  let component: BuildingCreateUpdateComponent;
  let fixture: ComponentFixture<BuildingCreateUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingCreateUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
