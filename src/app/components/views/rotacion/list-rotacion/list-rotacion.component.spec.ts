import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRotacionComponent } from './list-rotacion.component';

describe('ListRotacionComponent', () => {
  let component: ListRotacionComponent;
  let fixture: ComponentFixture<ListRotacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRotacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRotacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
