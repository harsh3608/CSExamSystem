import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateResultsListComponent } from './candidate-results-list.component';

describe('CandidateResultsListComponent', () => {
  let component: CandidateResultsListComponent;
  let fixture: ComponentFixture<CandidateResultsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateResultsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
