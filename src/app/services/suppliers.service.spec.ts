import { TestBed, inject } from '@angular/core/testing';

import { SupplierService } from './suppliers.service';

describe('SupplierService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupplierService]
    });
  });

  it('should be created', inject([SupplierService], (service: SupplierService) => {
    expect(service).toBeTruthy();
  }));
});
 