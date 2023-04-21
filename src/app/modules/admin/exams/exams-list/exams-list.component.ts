import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Table } from 'primeng/table';
import { ExamsCrudService } from '../../shared/services/exams-crud.service';
import { PresentCandidate, ScheduleExams } from '../../shared/models/schedule-exam.models';
import { MatDialog } from '@angular/material/dialog';
import { CandidatesDialogComponent } from '../candidates-dialog/candidates-dialog.component';
import { RescheduleCandidateExamComponent } from '../reschedule-candidate-exam/reschedule-candidate-exam.component';

@Component({
  selector: 'app-exams-list',
  templateUrl: './exams-list.component.html',
  styleUrls: ['./exams-list.component.css']
})
export class ExamsListComponent implements OnInit {
  loading: boolean = true;
  @ViewChild('dt') table!: Table;
  exams: ScheduleExams[] = [];

  constructor(
    private title: Title,
    private examService: ExamsCrudService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Manage Exams');
    setTimeout(() => {
      this.examService.getScheduleList().subscribe({
        next: (res) => {
          this.exams = res.response;
        }
      });
      this.loading = false;
    }, 1000);

  }

  openDialog(id: number, candidates: PresentCandidate) {
    //debugger
    const dialogRef = this.dialog.open(CandidatesDialogComponent,
      {
        data: { candidateExamId: id, candidates: candidates }
      }
    );
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  openRescheduleDialog(id: number) {
    const dialogRef = this.dialog.open(RescheduleCandidateExamComponent,
      {
        data: {candidateExamId: id}
      });
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  clear(table: Table) {
    table.clear();
  }
}
