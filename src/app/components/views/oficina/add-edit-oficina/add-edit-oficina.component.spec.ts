import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditOficinaComponent } from './add-edit-oficina.component';

describe('AddEditOficinaComponent', () => {
  let component: AddEditOficinaComponent;
  let fixture: ComponentFixture<AddEditOficinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditOficinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditOficinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
