import { TestBed } from '@angular/core/testing';

import { RickServiceService } from './rick-service.service';

describe('RickServiceService', () => {
  let service: RickServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
