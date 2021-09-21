import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDvrComponent } from './list-dvr.component';

describe('ListDvrComponent', () => {
  let component: ListDvrComponent;
  let fixture: ComponentFixture<ListDvrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDvrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDvrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
