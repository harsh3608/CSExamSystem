import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ExamsListComponent } from '../exams-list/exams-list.component';
import { CandidateDialogData } from '../../shared/models/schedule-exam.models';
import { ExamsRescheduleComponent } from '../exams-reschedule/exams-reschedule.component';

@Component({
  selector: 'app-candidates-dialog',
  templateUrl: './candidates-dialog.component.html',
  styleUrls: ['./candidates-dialog.component.css']
})
export class CandidatesDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ExamsListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CandidateDialogData,
    private router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {

  }

  onCancel() {
    this.dialogRef.close();
  }

  openDialog(candidateExamId: number, userId: string, name: string) {
    this.dialogRef.close();
    //debugger
    const dialogRef = this.dialog.open(ExamsRescheduleComponent,
      {
        data: { candidateExamId: candidateExamId, userId: userId, username:name }
      }
    );
    dialogRef.afterClosed().subscribe(result => {

    });
  }


}
