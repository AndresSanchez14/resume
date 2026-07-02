import { Component, OnInit } from '@angular/core';
import { MATERIAL_MODULES } from '../../shared/material/material.imports';
import { ThemeSwitchService } from '../../core/services/theme-switch/theme-switch.service';
import { LenguageSwitchService } from '../../core/services/lenguage-switch/lenguage-switch.service';
import { ShortResumeComponent } from './components/short-resume/short-resume.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MATERIAL_MODULES, ShortResumeComponent,
    ContactComponent, EducationComponent,
    SkillsComponent, WorkExperienceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  darkMode: boolean = false;
  lenguageSelected: string = 'spanish';
  dataToFillResume: any;
  constructor(private themeSwitchService: ThemeSwitchService,
    private lenguageSwitchService: LenguageSwitchService
  ) { }

  ngOnInit(): void {
    this.dataToFillResume = this.lenguageSwitchService.getDataToFillResume(this.lenguageSelected);
    console.log('HomeComponent initialized: ', this.dataToFillResume);
  }

  toggleTheme(): void {
    this.darkMode = !this.darkMode;
    this.themeSwitchService.toggleTheme(this.darkMode);
    console.log('Theme toggled:');
  }

  onChangueLenguageSelected(event: any): void {
    this.lenguageSelected = event.value;
    this.dataToFillResume = this.lenguageSwitchService.getDataToFillResume(this.lenguageSelected);
  }


}
