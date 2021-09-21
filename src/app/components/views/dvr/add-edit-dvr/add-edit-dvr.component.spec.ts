import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDvrComponent } from './add-edit-dvr.component';

describe('AddEditDvrComponent', () => {
  let component: AddEditDvrComponent;
  let fixture: ComponentFixture<AddEditDvrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDvrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDvrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
