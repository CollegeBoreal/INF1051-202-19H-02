import { TestBed } from '@angular/core/testing';

import { ArtistsListService } from './artists-list.service';

describe('ArtistsListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtistsListService = TestBed.get(ArtistsListService);
    expect(service).toBeTruthy();
  });
});
