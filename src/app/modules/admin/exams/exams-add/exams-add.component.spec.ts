import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsAddComponent } from './exams-add.component';

describe('ExamsAddComponent', () => {
  let component: ExamsAddComponent;
  let fixture: ComponentFixture<ExamsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
