import { TestBed } from '@angular/core/testing';

import { MyNewsService } from './my-news.service';

describe('MyNewsService', () => {
  let service: MyNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
