import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Technology } from 'src/app/modules/user/shared/models/technology.model';
import { ExamsListComponent } from '../exams-list/exams-list.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TechnologyService } from 'src/app/modules/shared-module/common-services/technology-service/technology.service';
import { RescheduleExamDialogData } from '../../shared/models/schedule-exam.models';
import { ExamsCrudService } from '../../shared/services/exams-crud.service';
import { RescheduleCandidateExam } from '../../shared/models/exam-crud.models';

@Component({
  selector: 'app-reschedule-candidate-exam',
  templateUrl: './reschedule-candidate-exam.component.html',
  styleUrls: ['./reschedule-candidate-exam.component.css']
})
export class RescheduleCandidateExamComponent implements OnInit {
  rescheduleForm!: FormGroup;
  techs: number[] = [];
  technologies: Technology[] = [];
  rescheduleRequest! : RescheduleCandidateExam;

  constructor(
    private fb: FormBuilder,
    private technologyService: TechnologyService,
    public dialogRef: MatDialogRef<ExamsListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RescheduleExamDialogData,
    private toastr: ToastrService,
    private examService: ExamsCrudService,
    private router: Router
  ) { }

  ngOnInit() {
    this.technologyService.getAllTechnologies().subscribe((res) => {
      this.technologies = res.response;
    });

    this.rescheduleForm = this.fb.group({
      id: new FormControl(this.data.candidateExamId),
      examDate: new FormControl('', [Validators.required]),
      technologies: new FormControl(this.techs)
    });
  }

  submitForm() {
    //console.log(this.rescheduleForm.value);
    this.rescheduleForm.markAllAsTouched();
    if (this.rescheduleForm.valid) {
      this.rescheduleRequest = this.rescheduleForm.value;
      this.examService.rescheduleCandidateExam(this.rescheduleRequest).subscribe({
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

  //when a technology is selected or deselected
  onCheckboxChange(id: number) {
    const index = this.techs.indexOf(id);
    if (index === -1) {
      this.techs.push(id);
    } else {
      this.techs.splice(index, 1);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }

  get examDate(): FormControl {
    return this.rescheduleForm.get("examDate") as FormControl;
  }
}
