import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableUserComponent } from './datatable-user.component';

describe('DatatableUserComponent', () => {
  let component: DatatableUserComponent;
  let fixture: ComponentFixture<DatatableUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatableUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatatableUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
