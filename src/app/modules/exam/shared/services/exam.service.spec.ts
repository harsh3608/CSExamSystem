import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ExamService } from './exam.service';
import { ExamResponse, ExamTimeResponse, ExamUserStatus, ExamUserStatusResponse, FinishExamResponse } from '../models/exam.models';

fdescribe('ExamService', () => {
  let service: ExamService;
  let examResponse: ExamResponse = {
    statusCode: 0,
    isSuccess: true,
    response: [],
    message: '',
    exceptionMessage: ''
  };
  let examStatus: ExamUserStatus = {
    id: 23,
    selectedAnswerId: 76,
    correctAnswer: 'A',
    statusId: 4,
    candidateExamUserId: 21,
  };
  let examUserStatusResponse: ExamUserStatusResponse = {
    statusCode: 0,
    isSuccess: true,
    response: '',
    message: '',
    exceptionMessage: '',
  };
  let finishExamResponse: FinishExamResponse = {
    statusCode: 0,
    isSuccess: true,
    response: {
      createdBy: '',
      createdOn: '',
      modifiedBy: '',
      lastModifiedOn: '',
      id: 67,
      userId: 'string',
      candidateExamId: 243,
      totalScore: 60,
      obtainedScore: 45,
      examDate: ''
    },
    message: '',
    exceptionMessage: '',
  };
  let examTimeResponse: ExamTimeResponse = {
    statusCode: 0,
    isSuccess: true,
    response: '',
    message: '',
    exceptionMessage: ''
  }


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ExamService]
    });
    service = TestBed.inject(ExamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have loginCandidate function', () => {
    service.getScheduledExams('user-4w5tvdf-vuwjk43jk.dv890').subscribe((res) => {
      expect(res).toEqual(examResponse);
    });
  });

  it('should have updateExamUserStatus function', () => {
    service.updateExamUserStatus(examStatus).subscribe((res) => {
      expect(res).toEqual(examUserStatusResponse);
    });
  });

  it('should have updateExamUserStatus function', () => {
    service.finishExam('user-4w5tvdf-vuwjk43jk.dv890').subscribe((res) => {
      expect(res).toEqual(finishExamResponse);
    });
  });

  it('should have updateExamUserStatus function', () => {
    service.updateExamTime(45, true).subscribe((res) => {
      expect(res).toEqual(examTimeResponse);
    });
  });

});
