import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditRotacionComponent } from './add-edit-rotacion.component';

describe('AddEditRotacionComponent', () => {
  let component: AddEditRotacionComponent;
  let fixture: ComponentFixture<AddEditRotacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditRotacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditRotacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
