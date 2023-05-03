import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateResultResponse, ResultDetailsResponse } from '../models/candidate-result.models';
import { candidateExamServerUrl } from 'src/app/modules/shared-module/common-server-links';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getCandidateResultList(): Observable<CandidateResultResponse> {
    return this.http.get<CandidateResultResponse>(candidateExamServerUrl + '/CandidateResultList?pageIndex=1&pageSize=500', { headers: this.headers });
  }

  getCandidateResultDetails(id: number, userId: string):Observable<ResultDetailsResponse> {
    return this.http.get<ResultDetailsResponse>(candidateExamServerUrl + '/CandidateResultDetails?candidateExamId='+id+'&userId='+userId, { headers: this.headers });
  }
}
