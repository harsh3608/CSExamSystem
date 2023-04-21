import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateResultResponse, ResultDetailsResponse } from '../models/candidate-result.models';
import { candidateExamServerUrl } from 'src/app/modules/shared-module/common-server-links';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http: HttpClient) { }

  getCandidateResultList(): Observable<CandidateResultResponse> {
    return this.http.get<CandidateResultResponse>(candidateExamServerUrl + '/CandidateResultList?pageIndex=1&pageSize=100');
  }

  getCandidateResultDetails(id: number):Observable<ResultDetailsResponse> {
    return this.http.get<ResultDetailsResponse>(candidateExamServerUrl + 'CandidateResultDetails?candidateExamId='+id);
  }
}
