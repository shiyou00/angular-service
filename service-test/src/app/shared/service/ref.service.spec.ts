import { TestBed, inject } from '@angular/core/testing';

import { RefService } from './ref.service';

describe('RefService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RefService]
    });
  });

  it('should be created', inject([RefService], (service: RefService) => {
    expect(service).toBeTruthy();
  }));
});
