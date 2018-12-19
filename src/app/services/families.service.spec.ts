import { TestBed, inject } from '@angular/core/testing';

import { FamilyService } from './families.service';

describe('FamilyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FamilyService]
    });
  });

  it('should be created', inject([FamilyService], (service: FamilyService) => {
    expect(service).toBeTruthy();
  }));
});
 