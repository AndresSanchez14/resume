import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

const DEVICON_MAP: Record<string, string> = {
  'python': 'python',
  'typescript': 'typescript',
  'javascript': 'javascript',
  'sql': 'mysql',
  'java': 'java',
  'angular': 'angularjs',
  'react': 'react',
  'bootstrap': 'bootstrap',
  'material design': 'materialui',
  'nestjs': 'nestjs',
  'express': 'devicon-express-original',
  'spring boot': 'spring',
  'flask': 'flask',
  'aws': 'amazonwebservices',
  'lambda': 'amazonwebservices',
  's3': 'amazonwebservices',
  'api gateway': 'amazonwebservices',
  'cognito': 'amazonwebservices',
  'dynamodb': 'amazonwebservices',
  'ecs': 'amazonwebservices'
};


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  @Input() dataToFillSkillsInfo: any;

  getDeviconClass(skill: string): string {
    const key = (skill || '').toLowerCase().trim();
    const iconName = DEVICON_MAP[key];
    if (skill.toLowerCase() === 'express') {
      return 'devicon-express-original colored';
    }
    return iconName ? `devicon-${iconName}-plain colored` : 'devicon-devicon-plain colored';
  }
}
