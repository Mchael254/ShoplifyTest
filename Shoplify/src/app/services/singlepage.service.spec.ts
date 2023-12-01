import { TestBed } from '@angular/core/testing';

import { SinglepageService } from './singlepage.service';

describe('SinglepageService', () => {
  let service: SinglepageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SinglepageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
