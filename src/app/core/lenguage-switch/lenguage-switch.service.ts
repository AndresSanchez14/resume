import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LenguageSwitchService {

  constructor() { }

  getDataToFillResume(lenguage: string): any {
    if (lenguage === 'english') {
      return
    }

  }
}
