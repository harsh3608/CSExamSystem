import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsUpdateComponent } from './questions-update.component';

describe('QuestionsUpdateComponent', () => {
  let component: QuestionsUpdateComponent;
  let fixture: ComponentFixture<QuestionsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
