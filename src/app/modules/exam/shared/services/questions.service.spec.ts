import { TestBed } from '@angular/core/testing';
import { QuestionsService } from './questions.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SelectedAnswer, Status } from '../models/exam.models';

fdescribe('QuestionsService', () => {
  let service: QuestionsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [QuestionsService]
    });
    service = TestBed.inject(QuestionsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('storeCheckedStatus', () => {
    it('should add a new status object to the status array', () => {
      const status: Status = {
        index: 1,
        id: 2,
        checked: true,
        optionId: 3,
        selected: 'A',
        candiateExamUserId: 4
      };
      //spyOn(localStorage, 'getItem').and.returnValue('[]');
      spyOn(localStorage, 'setItem');

      service.storeCheckedStatus(status);

      const storedStatuses = JSON.parse(localStorage.getItem('status-array') || '{}');
      expect(storedStatuses.length).toEqual(1);
      expect(storedStatuses[0]).toEqual(status);
      expect(localStorage.setItem).toHaveBeenCalledWith('status-array', JSON.stringify([status]));
    });

    it('should update an existing status object in the status array', () => {
      const existingStatus: Status = {
        index: 1,
        id: 2,
        checked: true,
        optionId: 3,
        selected: 'A',
        candiateExamUserId: 4
      };
      const updatedStatus: Status = {
        index: 1,
        id: 2,
        checked: false,
        optionId: 2,
        selected: 'B',
        candiateExamUserId: 4
      };
      //spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify([existingStatus]));
      spyOn(localStorage, 'setItem');

      service.storeCheckedStatus(updatedStatus);

      const storedStatuses = JSON.parse(localStorage.getItem('status-array') || '{}');
      expect(storedStatuses.length).toEqual(1);
      expect(storedStatuses[0]).toEqual(updatedStatus);
      expect(localStorage.setItem).toHaveBeenCalledWith('status-array', JSON.stringify([updatedStatus]));
    });
  });

  describe('getSelectedAnswer', () => {
    it('should return the selected answer for a given question index', () => {
      const status: Status = {
        index: 1,
        id: 2,
        checked: true,
        optionId: 3,
        selected: 'A',
        candiateExamUserId: 4
      };
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify([status]));

      const answer: SelectedAnswer = service.getSelectedAnswer(1);

      expect(answer).toEqual({ id: 2, optionId: 3, selected: 'A', candiateExamUserId: 4 });
    });

    it('should return default values if the question index is not found', () => {
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify([]));

      const answer: SelectedAnswer = service.getSelectedAnswer(1);

      expect(answer).toEqual({ id: 0, optionId: 0, selected: '', candiateExamUserId: 0 });
    });
  });

});
