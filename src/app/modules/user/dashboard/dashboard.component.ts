import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { Technology, TechnologyStack } from '../shared/models/technology.model';
import { TechnologyService } from '../../shared-module/common-services/technology-service/technology.service';
import { TechnologyComponent } from '../technology/technology.component';
import { AuthService } from '../../shared-module/common-services/auth-service/auth.service';
import { Router } from '@angular/router';
import { ExamService } from '../../exam/shared/services/exam.service';
import { CandidateExam } from '../../exam/shared/models/exam.models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // techStack!: TechnologyStack;
  // technologies: Technology[] = [];

  exams: CandidateExam[] = [];

  isLoading: boolean = false;
  username!: string;
  isExamScheduled:boolean = false;
  candidateExamId: number = 0;
  technology: string = 'QWERTY';

  constructor(
    private title: Title,
    private technologyService: TechnologyService,
    public dialog: MatDialog,
    private authService: AuthService,
    private router: Router,
    private examService: ExamService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.title.setTitle('User Dashboard');
    //this.getTechnologyStack();
    this.getScheduledExams();

    this.username = localStorage.getItem("name") || '';
  }

  // getTechnologyStack() {
  //   setTimeout(() => {
  //     this.technologyService.getAllTechnologies().subscribe({
  //       next: (res) => {
  //         this.technologies = res.response;
  //       }
  //     });
  //     this.isLoading=false;
  //   }, 1000);

  // }

  getScheduledExams() {
    const id = this.authService.getUserId();
    setTimeout(() => {
      this.examService.getScheduledExams(id).subscribe(
        (res)=>{
          if(res.isSuccess && res.statusCode==200){
            this.exams = res.response;
            this.isExamScheduled = true;
            this.candidateExamId = res.response[0].candidateExamId

          } else if(res.isSuccess && res.statusCode==400 ){
            this.isExamScheduled = false;
          }
        }
      );
      this.isLoading=false;
    }, 1000);
  }

  openModal(id: number, name: string) {
    const dialogRef = this.dialog.open(TechnologyComponent,
      {
        data: { id: id, technologyName: name }
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');

    });

  }

  logOut() {
    this.authService.removeToken();
    this.router.navigate(['']);
  }


}
