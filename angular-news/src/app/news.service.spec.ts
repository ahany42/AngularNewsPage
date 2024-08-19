import { TestBed } from '@angular/core/testing';

import { NEWSService } from './news.service';

describe('NEWSService', () => {
  let service: NEWSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NEWSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
