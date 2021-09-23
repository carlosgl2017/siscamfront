import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOficinaComponent } from './list-oficina.component';

describe('ListOficinaComponent', () => {
  let component: ListOficinaComponent;
  let fixture: ComponentFixture<ListOficinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOficinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOficinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
