import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeSwitchService {
  constructor() {

  }

  toggleTheme(darkMode: boolean): void {
    document.body.classList.toggle('dark-theme', darkMode);
  }

}
