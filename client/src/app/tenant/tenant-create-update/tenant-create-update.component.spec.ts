import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantCreateUpdateComponent } from './tenant-create-update.component';

describe('TenantCreateUpdateComponent', () => {
  let component: TenantCreateUpdateComponent;
  let fixture: ComponentFixture<TenantCreateUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantCreateUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
