import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsAddComponent } from './questions-add.component';

describe('QuestionsAddComponent', () => {
  let component: QuestionsAddComponent;
  let fixture: ComponentFixture<QuestionsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
