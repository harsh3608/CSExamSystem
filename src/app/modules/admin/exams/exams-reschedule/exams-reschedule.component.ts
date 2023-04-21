import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { RescheduleCandidateExamUser } from '../../shared/models/exam-crud.models';
import { TechnologyService } from 'src/app/modules/shared-module/common-services/technology-service/technology.service';
import { Technology } from 'src/app/modules/user/shared/models/technology.model';
import { CandidateDialogData, RescheduleExamDialogData } from '../../shared/models/schedule-exam.models';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ExamsCrudService } from '../../shared/services/exams-crud.service';
import { Router } from '@angular/router';
import { CandidatesDialogComponent } from '../candidates-dialog/candidates-dialog.component';

@Component({
  selector: 'app-exams-reschedule',
  templateUrl: './exams-reschedule.component.html',
  styleUrls: ['./exams-reschedule.component.css']
})
export class ExamsRescheduleComponent implements OnInit {
  rescheduleForm!: FormGroup;
  rescheduleRequest!: RescheduleCandidateExamUser;
  techs: number[] = [];
  technologies: Technology[] = [];
  previousExamId: number = 0;
  userId: string = '';

  constructor(
    private fb: FormBuilder,
    private technologyService: TechnologyService,
    public dialogRef: MatDialogRef<CandidatesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RescheduleExamDialogData,
    private toastr: ToastrService,
    private examService: ExamsCrudService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.technologyService.getAllTechnologies().subscribe((res) => {
      this.technologies = res.response;
    });
    this.rescheduleForm = this.fb.group({
      createdBy: new FormControl('str'),
      createdOn: new FormControl('2023-04-13T12:05:37.286Z'),
      modifiedBy: new FormControl('str'),
      lastModifiedOn: new FormControl('2023-04-13T12:05:37.286Z'),
      id: new FormControl(0),
      examDate: new FormControl('', [Validators.required]),
      ipAddress: new FormControl('str'),
      location: new FormControl(''),
      statusId: new FormControl(1),
      userList: new FormControl([]), // leave this array empty
      technologies: new FormControl(this.techs),
      previousCandidateExamId: new FormControl(this.data.candidateExamId),
      userId: new FormControl(this.data.userId),
    })
  }


  submitForm() {
    //console.log(this.rescheduleForm.value);
    this.rescheduleForm.markAllAsTouched();
    if (this.rescheduleForm.valid) {
      this.rescheduleRequest = this.rescheduleForm.value;
      this.examService.rescheduleCandidateUserExam(this.rescheduleRequest).subscribe({
        next: (res) => {
          if (res.isSuccess == true) {
            this.toastr.success('Exam Rescheduled Successfully!', 'Success!', {
              timeOut: 2000,
            });
            this.router.navigate(['/exams-list']);
            localStorage.removeItem("selected-users");
          } else {
            this.toastr.error('Exam not rescheduled!', 'Failure', {
              timeOut: 2000,
            });
            console.log(res);
          };
        }
      });
    };
    this.onCancel();
  }

  onCancel() {
    this.dialogRef.close();
  }


  //when a technology is selected or deselected
  onCheckboxChange(id: number) {
    const index = this.techs.indexOf(id);
    if (index === -1) {
      this.techs.push(id);
    } else {
      this.techs.splice(index, 1);
    }
  }

  get examDate(): FormControl {
    return this.rescheduleForm.get("examDate") as FormControl;
  }
}
