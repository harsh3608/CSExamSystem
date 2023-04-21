import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesDialogComponent } from './candidates-dialog.component';

describe('CandidatesDialogComponent', () => {
  let component: CandidatesDialogComponent;
  let fixture: ComponentFixture<CandidatesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatesDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
