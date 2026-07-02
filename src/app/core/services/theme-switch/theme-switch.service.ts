import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const STORAGE_KEY = 'preferredTheme';
@Injectable({
  providedIn: 'root'
})
export class ThemeSwitchService {

  private darkModeSubject = new BehaviorSubject<boolean>(false);
  darkMode$: Observable<boolean> = this.darkModeSubject.asObservable();

  constructor() { }

  toggleTheme(darkMode: boolean): void {
    document.body.classList.toggle('dark-theme', darkMode);
    document.body.classList.toggle('light-theme', !darkMode);
    localStorage.setItem(STORAGE_KEY, darkMode ? 'dark' : 'light');
  }

  getPreferredTheme(): boolean {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return stored === 'dark';
    }
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  }

}
