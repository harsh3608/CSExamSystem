import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RescheduleCandidateExamComponent } from './reschedule-candidate-exam.component';

describe('RescheduleCandidateExamComponent', () => {
  let component: RescheduleCandidateExamComponent;
  let fixture: ComponentFixture<RescheduleCandidateExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RescheduleCandidateExamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RescheduleCandidateExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
