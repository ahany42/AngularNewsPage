import { TestBed } from '@angular/core/testing';

import { DeleteNewsService } from './delete-news.service';

describe('DeleteNewsService', () => {
  let service: DeleteNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
