import { TestBed } from '@angular/core/testing';

import { QuetionAnsService } from './quetion-ans.service';

describe('QuetionAnsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuetionAnsService = TestBed.get(QuetionAnsService);
    expect(service).toBeTruthy();
  });
});
