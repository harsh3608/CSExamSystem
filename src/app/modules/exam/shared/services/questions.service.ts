import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SelectedAnswer, Status } from '../models/exam.models';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

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
    //// istanbul ignore next
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
