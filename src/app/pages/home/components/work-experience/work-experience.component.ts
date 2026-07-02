import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {
  @Input() dataToFillWorkExperienceInfo: any;
}
