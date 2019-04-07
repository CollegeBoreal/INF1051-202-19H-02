import { TestBed } from '@angular/core/testing';

import { BandsListService } from './bands-list.service';

describe('BandsListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BandsListService = TestBed.get(BandsListService);
    expect(service).toBeTruthy();
  });
});
