import { TestBed } from '@angular/core/testing';

import { LogAuthGuardGuard } from './log-auth-guard.guard';

describe('LogAuthGuardGuard', () => {
  let guard: LogAuthGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogAuthGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
