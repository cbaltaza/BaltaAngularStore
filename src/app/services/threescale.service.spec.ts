import { TestBed } from '@angular/core/testing';

import { ThreescaleService } from './threescale.service';

describe('ThreescaleService', () => {
  let service: ThreescaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThreescaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
