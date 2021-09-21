import { TestBed } from '@angular/core/testing';

import { DvrService } from './dvr.service';

describe('DvrService', () => {
  let service: DvrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DvrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
