import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDiscoComponent } from './add-edit-disco.component';

describe('AddEditDiscoComponent', () => {
  let component: AddEditDiscoComponent;
  let fixture: ComponentFixture<AddEditDiscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDiscoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
