import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadCvServiceService {

  constructor() { }

  downloadCV(): void {
    console.log('Download CV');
  }
}
