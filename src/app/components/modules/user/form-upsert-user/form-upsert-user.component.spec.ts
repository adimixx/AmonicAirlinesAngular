import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpsertUserComponent } from './form-upsert-user.component';

describe('FormUpsertUserComponent', () => {
  let component: FormUpsertUserComponent;
  let fixture: ComponentFixture<FormUpsertUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUpsertUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormUpsertUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
