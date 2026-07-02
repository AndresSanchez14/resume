import { TestBed } from '@angular/core/testing';

import { DownloadCvServiceService } from './download-cv-service.service';

describe('DownloadCvServiceService', () => {
  let service: DownloadCvServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadCvServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
