import { TestBed } from '@angular/core/testing';

import { MynewsService } from './mynews.service';

describe('MynewsService', () => {
  let service: MynewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MynewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
