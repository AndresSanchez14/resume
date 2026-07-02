import { Component, Input, OnInit } from '@angular/core';
import { DownloadCvServiceService } from '../../../../core/services/download-cv/download-cv.service';
import { MATERIAL_MODULES } from '../../../../shared/material/material.imports';

@Component({
  selector: 'app-short-resume',
  standalone: true,
  imports: [MATERIAL_MODULES],
  templateUrl: './short-resume.component.html',
  styleUrl: './short-resume.component.scss'
})
export class ShortResumeComponent implements OnInit {
  @Input() dataToFillShortResume: any;
  constructor(private downloadCvServiceService: DownloadCvServiceService) { }

  ngOnInit(): void {
    console.log('ShortResumeComponent initialized with data:', this.dataToFillShortResume);
  }

  downloadCV(): void {
    this.downloadCvServiceService.downloadCV();
  }

}
