import { TestBed } from '@angular/core/testing';

import { LenguageSwitchService } from './lenguage-switch.service';

describe('LenguageSwitchService', () => {
  let service: LenguageSwitchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LenguageSwitchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
