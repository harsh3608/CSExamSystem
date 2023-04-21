import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateResultDatailsComponent } from './candidate-result-datails.component';

describe('CandidateResultDatailsComponent', () => {
  let component: CandidateResultDatailsComponent;
  let fixture: ComponentFixture<CandidateResultDatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateResultDatailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateResultDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
