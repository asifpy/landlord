import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentCreateUpdateComponent } from './apartment-create-update.component';

describe('ApartmentCreateUpdateComponent', () => {
  let component: ApartmentCreateUpdateComponent;
  let fixture: ComponentFixture<ApartmentCreateUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentCreateUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
