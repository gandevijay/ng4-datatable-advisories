import { TestBed, inject } from '@angular/core/testing';

import { AdvisoryService } from './advisory.service';

describe('AdvisoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvisoryService]
    });
  });

  it('should be created', inject([AdvisoryService], (service: AdvisoryService) => {
    expect(service).toBeTruthy();
  }));
});
