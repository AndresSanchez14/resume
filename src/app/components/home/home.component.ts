import { Component, OnInit } from '@angular/core';
import { MATERIAL_MODULES } from '../../shared/material/material.imports';
import { ThemeSwitchService } from '../../core/theme-switch/theme-switch.service';
import { LenguageSwitchService } from '../../core/lenguage-switch/lenguage-switch.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MATERIAL_MODULES],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  darkMode: boolean = false;
  lenguageSelected: string = 'spanish';

  constructor(private themeSwitchService: ThemeSwitchService,
    private lenguageSwitchService: LenguageSwitchService) { }

  ngOnInit(): void {
    this.lenguageSwitchService.getDataToFillResume(this.lenguageSelected);
    console.log('HomeComponent initialized');
  }

  toggleTheme(): void {

    console.log('Theme toggled:');
  }
  onChangueLenguageSelected(event: any): void {
    console.log('Lenguage selected:', event.value);
  }

  downloadCV(): void {
    console.log('Download CV');
  }

}
