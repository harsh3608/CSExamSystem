import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { candidateExamServerUrl } from 'src/app/modules/shared-module/common-server-links';
import { ExamResponse, ExamTimeResponse, ExamUserStatus, ExamUserStatusResponse, FinishExamResponse } from '../models/exam.models';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private http: HttpClient) { }

  getScheduledExams(userId: string): Observable<ExamResponse> {
    return this.http.get<ExamResponse>(candidateExamServerUrl + '/StartCandidateExam?userId=' + userId, { headers: this.headers })
  }

  updateExamUserStatus(examStatus: ExamUserStatus): Observable<ExamUserStatusResponse> {
    return this.http.put<ExamUserStatusResponse>(candidateExamServerUrl + '/UpdateExamUserStatus', examStatus, { headers: this.headers })
  }

  finishExam(userId: string): Observable<FinishExamResponse> {
    return this.http.get<FinishExamResponse>(candidateExamServerUrl + '/FinishExam?userId=' + userId, { headers: this.headers })
  }

  updateExamTime(candidateExamId: number, isStartTime: boolean): Observable<ExamTimeResponse> {
    return this.http.put<ExamTimeResponse>(candidateExamServerUrl + '/UpdateExamTime?id=' + candidateExamId + '&isStartTime=' + isStartTime, { headers: this.headers } )
  }
}
