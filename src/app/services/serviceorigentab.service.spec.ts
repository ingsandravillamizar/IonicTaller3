import { TestBed } from '@angular/core/testing';

import { Serviceorigentab } from './serviceorigentab.service';

describe('ServiceorigentabService', () => {
  let service: Serviceorigentab;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Serviceorigentab);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
