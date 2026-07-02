import { Injectable } from '@angular/core';
import { LenguageSwitchService } from '../lenguage-switch/lenguage-switch.service';

@Injectable({
  providedIn: 'root'
})
export class DownloadCvServiceService {

  constructor(private lenguageSwitchService: LenguageSwitchService) { }

  downloadCV(): void {
    const actualLenguage = this.lenguageSwitchService.getActualLenguage();
    const link = document.createElement('a');
    link.href = actualLenguage === 'spanish' ? 'assets/cv/CV_AS_SPA.pdf' : 'assets/cv/CV_AS_EN.pdf';
    link.download = actualLenguage === 'spanish' ? 'CV_AS_SPA.pdf' : 'CV_AS_EN.pdf';
    link.click();
  }
}
