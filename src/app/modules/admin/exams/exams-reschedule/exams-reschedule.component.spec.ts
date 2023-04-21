import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsRescheduleComponent } from './exams-reschedule.component';

describe('ExamsRescheduleComponent', () => {
  let component: ExamsRescheduleComponent;
  let fixture: ComponentFixture<ExamsRescheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamsRescheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamsRescheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
