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
  isQuesLoading: boolean = false;
  candidateName: string = '';

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
    this.candidateName = this.route.snapshot.paramMap.get('name') || '';
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
    };
  }

  showAllQuestions() {
    this.isQuesLoading = true;
    setTimeout(() => {
      this.totalQuestions = this.resultResponse;
      this.isQuesLoading = false;
    }, 1000);
  }

  showCorrectQuestions() {
    this.isQuesLoading = true;
    setTimeout(() => {
      this.totalQuestions = this.correct;
      this.isQuesLoading = false;
    }, 1000);
  }

  showWrongQuestions() {
    this.isQuesLoading = true;
    setTimeout(() => {
      this.totalQuestions = this.wrong;
      this.isQuesLoading = false;
    }, 1000);
  }

}
