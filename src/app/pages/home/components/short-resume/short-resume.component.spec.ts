import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortResumeComponent } from './short-resume.component';

describe('ShortResumeComponent', () => {
  let component: ShortResumeComponent;
  let fixture: ComponentFixture<ShortResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortResumeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShortResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
