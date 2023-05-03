import { Component, OnDestroy, OnInit, } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from '../shared/services/questions.service';
import { QuestionsResponse, Question } from '../../shared-module/models/question.model';
import { ExamService } from '../shared/services/exam.service';
import { CandidateExam, ExamUserStatus, Status } from '../shared/models/exam.models';
import { Technology } from '../../user/shared/models/technology.model';
import { TechnologyService } from '../../shared-module/common-services/technology-service/technology.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../shared-module/common-services/auth-service/auth.service';

@Component({
  selector: 'app-exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.css']
})
export class ExamPageComponent implements OnInit, OnDestroy {
  minutes: number = 40;
  seconds: number = 0;
  interval: any;
  //questionResponse!: QuestionsResponse;
  questions: CandidateExam[] = [];
  //que!: Question;
  length: number = 0;
  currentIndex: number = 0;
  isStartDisabled: boolean = false;
  id!: any;
  candidateExamId: number = 0;
  technologies: Technology[] = [];
  checked: boolean = false;
  status!: Status;
  tech: string = '';
  userId!: string;

  //Constructor to initialize component and inject dependencies
  constructor(
    private title: Title,
    private questionsService: QuestionsService,
    private router: Router,
    private route: ActivatedRoute,
    private technologyService: TechnologyService,
    private examService: ExamService,
    private toastr: ToastrService,
    private authservice: AuthService
  ) { }

  //LifeCycle Event
  ngOnInit() {
    this.title.setTitle('Test');
    this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');
      }
    });
    this.userId = this.authservice.getUserId();
    this.examService.getScheduledExams(this.userId).subscribe(
      (res) => {
        if (res.isSuccess) {
          this.candidateExamId = res.response[0].candidateExamId
          res.response.forEach(element => {
            this.questions.push(element);
          });
          this.length = res.response.length;
        }
      }
    );
    this.technologyService.getAllTechnologies().subscribe({
      next: (res) => {
        this.technologies = res.response;
        //console.log(this.technologies);
      }
    });
  }

  // As soon as the instance of the exam-page ends, saved
  // user-responses would be removed from the local storage.
  ngOnDestroy(): void {
    //this.questionsService.removeStoredResponse();
    if(this.isStartDisabled){
      this.submitTest();
      localStorage.removeItem("status-array");
    }

  }

  navTab(index: number) {
    this.submitResponse(this.currentIndex);
    this.currentIndex = index;
  }

  isActive(i: number): boolean {
    let val = false
    const statusArr: Status[] = JSON.parse(localStorage.getItem("status-array") || '[]');
    statusArr.forEach(element => {
      if (element.index == i) {
        val = true;
      }
    })
    return val;
  }

  // to show technology name above the question
  getTechById(id: number): string {
    this.technologies.map(element => {
      if (id == element.id) {
        this.tech = element.technologyName;
      };
    })
    return this.tech;
  }

  //Function to start timer to mark beginning of the test
  startTest() {

    this.examService.updateExamTime(this.candidateExamId, true).subscribe(
      (res) => {
        if (res.isSuccess && res.statusCode == 200) {

          // After only time is updated
          this.isStartDisabled = true;
          //console.log(res);
          this.interval = setInterval(() => {
            if (this.seconds > 0) {
              this.seconds--;
            } else if (this.minutes == 0 && this.seconds == 0) {
              this.submitTest();
            } else {
              this.seconds = 59;
              this.minutes--;
            }
          }, 1000);
        }
      }
    )
  }

  //Function to submit Test, which resets timer and test form
  submitTest() {
    //To update the status of current question
    this.submitResponse(this.currentIndex);
    // To update exam end time
    this.examService.updateExamTime(this.candidateExamId, false).subscribe(
      (res) => {
        if (res.isSuccess && res.statusCode == 200) {

          //Timer set to 0
          clearInterval(this.interval);
          this.minutes = 0;
          this.seconds = 0;

          this.examService.finishExam(this.userId).subscribe(
            (res) => {
              if (res.isSuccess && res.statusCode == 200) {
                this.toastr.success('Exam Completed Successfully!', 'Success!', {
                  timeOut: 2000,
                });
                localStorage.removeItem("status-array");
                this.router.navigate(['user-dashboard']);
                this.questionsService.removeStoredResponse();
              }
               else if (res.isSuccess && res.statusCode != 200) {
                this.toastr.success('Exam Completed Successfully!', 'Success!', {
                  timeOut: 2000,
                });
                localStorage.removeItem("status-array");
                this.router.navigate(['user-dashboard']);
                this.questionsService.removeStoredResponse();
              }
            }
          );
        }
      }
    )


  }

  //Function to decrease index, Called on clicking Prev. button
  decreaseIndex() {
    this.submitResponse(this.currentIndex);
    this.currentIndex--;
  }

  // Function call on each Question
  //API CALL Function to submit response for current question
  submitResponse(index: number) {
    let selectedAnswer = this.questionsService.getSelectedAnswer(index);

    let examStatus: ExamUserStatus = {
      id: selectedAnswer.id,
      selectedAnswerId: selectedAnswer.optionId,
      correctAnswer: selectedAnswer.selected,
      statusId: 4,
      candidateExamUserId: selectedAnswer.candiateExamUserId,
    };

    this.examService.updateExamUserStatus(examStatus).subscribe(
      (res) => {
        if (res.isSuccess) {
          //console.log("answer submitted Successfully");
        };
      }
    );

  }

  //Function to increase index, Called on clicking Next button
  increaseIndex() {
    this.submitResponse(this.currentIndex);
    this.currentIndex++;

  }

  // Function to check whether user already checked the option, fo r the particular question
  getOptionValue(): string {
    let value = ''
    const statusArr: Status[] = JSON.parse(localStorage.getItem("status-array") || '[]');
    statusArr.forEach(element => {
      if (element.index == this.currentIndex) {
        value = element.selected
      };
    });

    return value;
  }

  optionChecked(id: number, optionId: number, answer: string, candidateExamUserId: number) {

    this.status = {
      index: this.currentIndex,
      checked: true,
      id: id,
      optionId: optionId,
      selected: answer,
      candiateExamUserId: candidateExamUserId
    }
    this.questionsService.storeCheckedStatus(this.status);
  }
}
