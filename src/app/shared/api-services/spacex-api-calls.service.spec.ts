import { TestBed } from '@angular/core/testing';

import { SpacexApiCallsService } from './spacex-api-calls.service';

describe('SpacexApiCallsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpacexApiCallsService = TestBed.get(SpacexApiCallsService);
    expect(service).toBeTruthy();
  });
});
