import { TestBed } from '@angular/core/testing';

import { ExamsCrudService } from './exams-crud.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Exam, ExamReturnResponse } from '../models/exam-crud.models';
import { AES } from 'crypto-js';

describe('ExamsCrudService', () => {
  let service: ExamsCrudService;
  let httpMock: HttpTestingController;
  let baseServerLink: string = 'http://13.90.224.87:8099/api/CandidateExam';
  let secretKey: string = 'converge-solutions-2023';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ExamsCrudService]
    });
    service = TestBed.inject(ExamsCrudService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('scheduleExam', () => {
    it('should make a POST request to the API', () => {
      const exam: Exam = {
        createdBy: '',
        createdOn: '',
        modifiedBy: '',
        lastModifiedOn: '',
        id: 45,
        examDate: '',
        ipAddress: '',
        location: '',
        statusId: 4,
        userList: [],
        technologies: []
      };
      const expectedResponse: ExamReturnResponse = {
        statusCode: 200,
        isSuccess: true,
        response: exam,
        message: '',
        exceptionMessage: ''
      };
      service.scheduleExam(exam).subscribe((response) => {
        expect(response).toEqual(expectedResponse);
      });
      const req = httpMock.expectOne(baseServerLink + '/AddCandidateExam');
      expect(req.request.method).toEqual('POST');
      req.flush(expectedResponse);
    });
  });

  describe('addUsers', () => {
    it('should encrypt and store user data in local storage', () => {
      const users = ['user1', 'user2', 'user3'];
      // spyOn(AES, 'encrypt').and.returnValue({
      //   toString: () => 'encrypted data'
      // });
      service.addUsers(users);
      //expect(localStorage.getItem('selected-users')).toEqual(JSON.stringify('U2FsdGVkX182W4kbGwMDc31PDZEyBhr0xAttf7quoH1cRj+0ge7+MUbm3fCK0ksG'));
      //expect(AES.encrypt).toHaveBeenCalledWith(JSON.stringify(users), 'converge-solutions-2023');
    });
  });





});
