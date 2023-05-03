import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exam, ExamReturnResponse, RescheduleCandidateExam, RescheduleCandidateExamUser, RescheduleCandidateExamUserResponse } from '../models/exam-crud.models';
import { Observable } from 'rxjs';
import { candidateExamServerUrl } from 'src/app/modules/shared-module/common-server-links';
import { AES } from 'crypto-js';
import * as CryptoJS from 'crypto-js';
import { ScheduleResponse } from '../models/schedule-exam.models';

@Injectable({
  providedIn: 'root'
})
export class ExamsCrudService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  secretKey: string = 'converge-solutions-2023';

  constructor(private http: HttpClient) { }

  scheduleExam(exam: Exam): Observable<ExamReturnResponse> {
    return this.http.post<ExamReturnResponse>(candidateExamServerUrl + '/AddCandidateExam', exam, { headers: this.headers })
  }

  addUsers(users: string[]) {
    const encrUsers = AES.encrypt((JSON.stringify(users)), this.secretKey).toString();
    localStorage.setItem("selected-users", JSON.stringify(encrUsers));
  }

  getAddedUsers() {
    const usersArr = JSON.parse(localStorage.getItem("selected-users") || '[]');
    const decrUsers = JSON.parse(AES.decrypt(usersArr, this.secretKey).toString(CryptoJS.enc.Utf8));
    return decrUsers;
  }

  getScheduleList(): Observable<ScheduleResponse> {
    return this.http.get<ScheduleResponse>(candidateExamServerUrl + '/ScheduleList?pageIndex=1&pageSize=500', { headers: this.headers });
  }

  rescheduleCandidateUserExam(exam: RescheduleCandidateExamUser): Observable<RescheduleCandidateExamUserResponse> {
    return this.http.post<RescheduleCandidateExamUserResponse>(candidateExamServerUrl + '/RescheduleCandidateUserExam', exam, { headers: this.headers });
  }

  rescheduleCandidateExam(exam: RescheduleCandidateExam):Observable<ExamReturnResponse> {
    return this.http.post<ExamReturnResponse>(candidateExamServerUrl + '/RescheduleCandidateExam', exam, { headers: this.headers });
  }
}
