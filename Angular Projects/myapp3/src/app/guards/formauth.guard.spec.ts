import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { formauthGuard } from './formauth.guard';

describe('formauthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => formauthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
