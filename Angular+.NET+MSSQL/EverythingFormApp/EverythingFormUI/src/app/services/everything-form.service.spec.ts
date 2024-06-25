import { TestBed } from '@angular/core/testing';

import { EverythingFormService } from './everything-form.service';

describe('EverythingFormService', () => {
  let service: EverythingFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EverythingFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
