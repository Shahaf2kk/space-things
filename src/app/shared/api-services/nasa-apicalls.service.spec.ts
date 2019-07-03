import { TestBed } from '@angular/core/testing';

import { NasaAPICallsService } from './nasa-api-calls.service';

describe('NasaAPICallsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NasaAPICallsService = TestBed.get(NasaAPICallsService);
    expect(service).toBeTruthy();
  });
});
