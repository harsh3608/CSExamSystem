import { TestBed } from '@angular/core/testing';

import { QuestionsCrudService } from './questions-crud.service';

describe('QuestionsCrudService', () => {
  let service: QuestionsCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionsCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
