import { TestBed } from '@angular/core/testing';

import { FestiCarService } from './festi-car.service';

describe('FestiCarService', () => {
  let service: FestiCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FestiCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
