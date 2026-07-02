import { Component, Input, OnInit } from '@angular/core';
import { MATERIAL_MODULES } from '../../../../shared/material/material.imports';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MATERIAL_MODULES],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  @Input() dataToFillContactInfo: any;
  email = 'andres.sanchez@example.com';

  ngOnInit(): void {
    console.log('ContactComponent initialized with data:', this.dataToFillContactInfo);
  }
}
