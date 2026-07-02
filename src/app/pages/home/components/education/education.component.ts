import { Component, Input, OnInit } from '@angular/core';
import { MATERIAL_MODULES } from '../../../../shared/material/material.imports';


@Component({
  selector: 'app-education',
  standalone: true,
  imports: [MATERIAL_MODULES],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent implements OnInit {
  @Input() dataToFillEducationInfo: any;

  ngOnInit(): void {
    console.log('EducationComponent initialized: ', this.dataToFillEducationInfo);
  }

}
