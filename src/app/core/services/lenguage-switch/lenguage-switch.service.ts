import { Injectable } from '@angular/core';
import { data_en } from '../../constants/data_en';
import { data_es } from '../../constants/data_es';
@Injectable({
  providedIn: 'root'
})
export class LenguageSwitchService {
  dataToFillResume: any = {
    navMenu: {
      home: '',
      skills: '',
      aboutMe: '',
      qualifications: '',
      experience: '',
      projects: '',
      contact: ''
    },
    shortIntroduction: {
      title: '',
      description: '',
      buttons: {
        downloadCVText: '',
        sendEmailText: ''
      }
    }
  }
  actualLenguage: string = 'spanish';
  constructor() { }

  getActualLenguage(): string {
    return this.actualLenguage;
  }

  getDataToFillResume(lenguage: string): any {
    this.actualLenguage = lenguage;
    if (lenguage === 'english') {
      return data_en
    }
    return data_es
  }
}
