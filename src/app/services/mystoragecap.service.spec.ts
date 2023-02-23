import { TestBed } from '@angular/core/testing';

import { MystoragecapService } from './mystoragecap.service';

describe('MystoragecapService', () => {
  let service: MystoragecapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MystoragecapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
