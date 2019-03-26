import { TestBed } from '@angular/core/testing';

import { ColorsListService } from './colors-list.service';

describe('ColorsListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColorsListService = TestBed.get(ColorsListService);
    expect(service).toBeTruthy();
  });
});
