import { TestBed } from '@angular/core/testing';

import { CollectionserviceService } from './collectionservice.service';

describe('CollectionserviceService', () => {
  let service: CollectionserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectionserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
