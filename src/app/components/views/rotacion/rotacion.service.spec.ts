import { TestBed } from '@angular/core/testing';

import { RotacionService } from './rotacion.service';

describe('RotacionService', () => {
  let service: RotacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RotacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
