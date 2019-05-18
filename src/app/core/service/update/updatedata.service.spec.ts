import { TestBed } from '@angular/core/testing';

import { UpdatedataService } from './updatedata.service';

describe('UpdatedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdatedataService = TestBed.get(UpdatedataService);
    expect(service).toBeTruthy();
  });
});
