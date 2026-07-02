import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { DownloadCvServiceService } from '../../../../core/services/download-cv/download-cv.service';
import { MATERIAL_MODULES } from '../../../../shared/material/material.imports';
import { ThemeSwitchService } from '../../../../core/services/theme-switch/theme-switch.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-short-resume',
  standalone: true,
  imports: [MATERIAL_MODULES],
  templateUrl: './short-resume.component.html',
  styleUrl: './short-resume.component.scss'
})
export class ShortResumeComponent implements OnInit, OnDestroy {
  @Input() dataToFillShortResume: any;
  isDarkMode: boolean = false;
  pathImgFlaskLogo: string = 'assets/logos/flask-logo.png';
  private destroy$ = new Subject<void>();
  constructor(private downloadCvServiceService: DownloadCvServiceService,
    private themeSwitchService: ThemeSwitchService
  ) { }

  ngOnInit(): void {
    this.themeSwitchService.darkMode$
      .pipe(takeUntil(this.destroy$))
      .subscribe(darkMode => {
        this.isDarkMode = darkMode;
        this.pathImgFlaskLogo = darkMode ? 'assets/logos/flask_logo_dark_mode.png' : 'assets/logos/flask-logo.png';

      });
    console.log('ShortResumeComponent initialized with data:', this.dataToFillShortResume);
  }

  downloadCV(): void {
    this.downloadCvServiceService.downloadCV();
  }

  scrollToContact(event: Event): void {
    event.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
