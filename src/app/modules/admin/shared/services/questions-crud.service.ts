import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { questionsServerUrl } from 'src/app/modules/shared-module/common-server-links';
import { QuesByIdResponse, Question, QuestionReturnResponse, QuestionsResponse } from 'src/app/modules/shared-module/models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsCrudService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getAllQuestionsAsync(): Observable<QuestionsResponse> {
    return this.http.get<QuestionsResponse>(questionsServerUrl+'/GetAllAsync?pageIndex=1&pageSize=100', { headers: this.headers });
  }

  addNewQuestion(question: Question): Observable<QuestionReturnResponse> {
    return this.http.post<QuestionReturnResponse>(questionsServerUrl+'/AddQuestion', question, { headers: this.headers });
  }

  getQuestionsById(id: any): Observable<QuesByIdResponse> {
    return this.http.get<QuesByIdResponse>(questionsServerUrl+'/GetQuestionById?id='+id, { headers: this.headers });
  }

  updateQuestion(question: Question): Observable<QuestionReturnResponse>{
    return this.http.put<QuestionReturnResponse>(questionsServerUrl+'/UpdateQuestion',question, { headers: this.headers })
  }

}
