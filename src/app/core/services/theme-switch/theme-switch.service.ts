import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeSwitchService {
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  darkMode$: Observable<boolean> = this.darkModeSubject.asObservable();

  constructor() { }

  toggleTheme(darkMode: boolean): void {
    this.darkModeSubject.next(darkMode);
    document.body.classList.toggle('dark-theme', darkMode);
  }

}
