import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SelectedAnswer, Status } from '../models/exam.models';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // //To get questions set from API by Technology ID
  // getQuestionsByTechnologyId(id:number): Observable<QuestionsResponse> {
  //   return this.http.get<QuestionsResponse>(questionsServerUrl+'/GetByTechnologyId?technologyId='+id+'&pageIndex=1&pageSize=15',
  //    { headers: this.headers }
  //   );
  // }

  // //to store candidate reponses temporarily in Local Storage
  // storeUserResponse(response: SubmitExam) {
  //   //To fetch responses from localstorage, (if exists )
  //   const userResponses: SubmitExam[] = JSON.parse(localStorage.getItem("testResponses") || '[]');
  //   let isResponse: Boolean = false;
  //   //if array is not empty, interate through the elements
  //   for (let i = 0; i < userResponses.length; i++) {
  //     //if an element matches with current response, over write it
  //     //and set boolean to true
  //     if (userResponses[i].questionId == response.questionId) {
  //       userResponses[i].candidateExamId = response.candidateExamId;
  //       userResponses[i].selectedAnswerId = response.selectedAnswerId;
  //       userResponses[i].userSelectedAnswer = response.userSelectedAnswer;

  //       isResponse = true;
  //     }
  //   }
  //   //If element is not over written, push the current response
  //   if (!isResponse) {
  //     userResponses.push(response);
  //   }
  //   //Finally, set the array in local storage
  //   localStorage.setItem("testResponses", JSON.stringify(userResponses));
  // }

  storeCheckedStatus(status: Status) {

    const statusArr: Status[] = JSON.parse(localStorage.getItem("status-array") || '[]');
    let isResponse: Boolean = false;
    for (let i = 0; i < statusArr.length; i++) {
      //if an element matches with current response, over write it
      //and set boolean to true
      if (statusArr[i].index == status.index) {
        statusArr[i].id == status.id,
        statusArr[i].checked = status.checked,
        statusArr[i].optionId = status.optionId,
        statusArr[i].selected = status.selected,
        statusArr[i].candiateExamUserId = status.candiateExamUserId,

        isResponse = true;
      };
    }
    if (!isResponse) {
      statusArr.push(status);
    }
    localStorage.setItem("status-array", JSON.stringify(statusArr));
  }

  getSelectedAnswer(index: number): SelectedAnswer {

    let answer: SelectedAnswer = {
      id: 0,
      optionId: 0,
      selected: "",
      candiateExamUserId: 0,
    }
    const statusArr: Status[] = JSON.parse(localStorage.getItem("status-array") || '[]');
    for (let i = 0; i < statusArr.length; i++) {
      if (statusArr[i].index == index) {
        answer.id = statusArr[i].id,
          answer.optionId = statusArr[i].optionId,
          answer.selected = statusArr[i].selected,
          answer.candiateExamUserId = statusArr[i].candiateExamUserId
      };
    };
    return answer;
  }

  //To remove userresponses from local storage soon after submission
  removeStoredResponse() {
    localStorage.removeItem("testResponses");
    localStorage.removeItem("exam-id");
    localStorage.removeItem("status-array");
  }



}
