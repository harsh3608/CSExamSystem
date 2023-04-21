import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ResultService } from '../../shared/services/result.service';
import { ResultDetails } from '../../shared/models/candidate-result.models';

@Component({
  selector: 'app-candidate-result-details',
  templateUrl: './candidate-result-datails.component.html',
  styleUrls: ['./candidate-result-datails.component.css']
})
export class CandidateResultDatailsComponent implements OnInit {
  correct: ResultDetails[] = [];
  wrong: ResultDetails[] = [];
  totalQuestions: ResultDetails[] = [];
  isLoading: boolean = true;
  resultResponse: ResultDetails[] = [];

  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private resultService: ResultService
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Candidate Result');
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
    this.route.paramMap.subscribe(
      (params) => {
        const candidateExamId: number = this.route.snapshot.params['id'];
        const userId: string = this.route.snapshot.params['uid'];
        if (candidateExamId && userId) {
          //debugger
          this.resultService.getCandidateResultDetails(candidateExamId, userId).subscribe({
            next: (res) => {
              if (res.isSuccess) {
                this.resultResponse = res.response;
                this.totalQuestions = res.response;
                res.response.forEach(element => {
                  if (element.isCorrect) {
                    this.correct.push(element);
                  }
                  else if (!element.isCorrect) {
                    this.wrong.push(element);
                  }
                })
              }
            }
          })
        }
      }
    );

  }

  showAllQuestions() {
    this.totalQuestions = this.resultResponse;
  }

  showCorrectQuestions() {
    this.totalQuestions = this.correct;
  }

  showWrongQuestions() {
    this.totalQuestions = this.wrong;
  }

}
