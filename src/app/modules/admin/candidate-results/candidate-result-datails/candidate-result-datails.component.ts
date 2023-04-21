import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-candidate-result-datails',
  templateUrl: './candidate-result-datails.component.html',
  styleUrls: ['./candidate-result-datails.component.css']
})
export class CandidateResultDatailsComponent implements OnInit{
  resultResponse = {
    "statusCode": 200,
    "isSuccess": true,
    "response": [
      {
        "id": 93,
        "candidateExamId": 30,
        "questionId": 14,
        "selectedAnswerId": 49,
        "userSelectedAnswer": "B",
        "correctAnswer": "B",
        "technology": "Object Oriented Programming Concepts",
        "question": "<p>What is an example of dynamic binding?</p>\n",
        "candiateExamUserId": 0,
        "isCorrect": true
      },
      {
        "id": 94,
        "candidateExamId": 30,
        "questionId": 16,
        "selectedAnswerId": 0,
        "userSelectedAnswer": "",
        "correctAnswer": "D",
        "technology": "Object Oriented Programming Concepts",
        "question": "<p>Q1</p>\n",
        "candiateExamUserId": 0,
        "isCorrect": false
      },
      {
        "id": 95,
        "candidateExamId": 30,
        "questionId": 17,
        "selectedAnswerId": 0,
        "userSelectedAnswer": "",
        "correctAnswer": "B",
        "technology": "Object Oriented Programming Concepts",
        "question": "<p>Q2 modified</p>\n",
        "candiateExamUserId": 0,
        "isCorrect": false
      },
      {
        "id": 96,
        "candidateExamId": 30,
        "questionId": 18,
        "selectedAnswerId": 64,
        "userSelectedAnswer": "A",
        "correctAnswer": "B",
        "technology": "Object Oriented Programming Concepts",
        "question": "<p>Q3</p>\n",
        "candiateExamUserId": 0,
        "isCorrect": false
      },
      {
        "id": 97,
        "candidateExamId": 30,
        "questionId": 19,
        "selectedAnswerId": 0,
        "userSelectedAnswer": "",
        "correctAnswer": "B",
        "technology": "Object Oriented Programming Concepts",
        "question": "<p>Q4</p>\n",
        "candiateExamUserId": 0,
        "isCorrect": false
      }
    ],
    "message": "Result details fetched successfully",
    "exceptionMessage": ""
  };

  correct: any[] = [];
  wrong: any[] = [];
  totalQuestions: any[] = []

  constructor(
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Candidate Result');

    this.totalQuestions = this.resultResponse.response;

    this.resultResponse.response.forEach(element=>{
      if(element.isCorrect){
        this.correct.push(element);
      }
      else if(!element.isCorrect){
        this.wrong.push(element);
      }
    })
  }

  showAllQuestions() {
    this.totalQuestions = this.resultResponse.response;
  }

  showCorrectQuestions() {
    this.totalQuestions = this.correct;
  }

  showWrongQuestions() {
    this.totalQuestions = this.wrong;
  }

}
