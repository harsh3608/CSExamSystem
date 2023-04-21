import { TestBed } from '@angular/core/testing';

import { ExamsCrudService } from './exams-crud.service';

describe('ExamsCrudService', () => {
  let service: ExamsCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamsCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
