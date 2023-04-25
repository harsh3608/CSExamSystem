import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { TechnologyService } from 'src/app/modules/shared-module/common-services/technology-service/technology.service';
import { Technology } from 'src/app/modules/user/shared/models/technology.model';
import { Exam } from '../../shared/models/exam-crud.models';
import { MatDialog } from '@angular/material/dialog';
import { AddUsersDialogComponent } from '../add-users-dialog/add-users-dialog.component';
import { ExamsCrudService } from '../../shared/services/exams-crud.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/modules/user/shared/services/user.service';
import { Candidate } from 'src/app/modules/user/shared/models/user.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-exams-add',
  templateUrl: './exams-add.component.html',
  styleUrls: ['./exams-add.component.css']
})
export class ExamsAddComponent implements OnInit {
  addForm!: FormGroup;
  technologies: Technology[] = [];
  addRequest!: Exam;
  techs: number[] = [];
  users: string[] = [];
  usernames: string[] = [];
  candidates: Candidate[] = [];
  currentDate = new Date();

  constructor(
    private technologyService: TechnologyService,
    private title: Title,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private examService: ExamsCrudService,
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Schedule Exam');
    this.technologyService.getAllTechnologies().subscribe((res) => {
      this.technologies = res.response;
    }
    );
    this.addForm = this.fb.group({
      createdBy: new FormControl('str'),
      createdOn: new FormControl('2023-04-13T12:05:37.286Z'),
      modifiedBy: new FormControl('str'),
      lastModifiedOn: new FormControl('2023-04-13T12:05:37.286Z'),
      id: new FormControl(0),
      examDate: new FormControl('', [Validators.required]),
      ipAddress: new FormControl('str'),
      location: new FormControl(''),
      statusId: new FormControl(1),
      userList: new FormControl(this.users),
      technologies: new FormControl(this.techs),
    });
    this.userService.getAllUsers().subscribe({
      next: (res) => {
        if (res.isSuccess) {
          this.candidates = res.response;
        };
      }
    })
  }

  submitAddForm() {
    //console.log(this.addForm.value);
    this.addForm.markAllAsTouched();
    if (this.addForm.valid) {
      this.addRequest = this.addForm.value;
      this.examService.scheduleExam(this.addRequest).subscribe({
        next: (res) => {
          if (res.isSuccess == true) {
            this.toastr.success('Exam Scheduled Successfully!', 'Success!',{
              timeOut: 2000,
            });
            this.router.navigate(['/exams-list']);
            localStorage.removeItem("selected-users");
          } else {
            this.toastr.error('Exam not scheduled!', 'Failure', {
              timeOut: 2000,
            });
            console.log(res);
          };
        }
      });
    };
  }


  openDialog() {
    const dialogRef = this.dialog.open(AddUsersDialogComponent,
      {
        data: {selectedUsers: this.users}
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      this.getSelectedUsers();
      this.addForm.patchValue({userList: this.users});
      this.usernames = this.getUserNames(this.users, this.candidates);
    });
  }

  getUserNames(userIds: string[], candidates: Candidate[]) {
    const filteredUsers = candidates.filter(user => userIds.includes(user.id));
    const userNames = filteredUsers.map(user => user.fullName);
    return userNames;
  }

  getSelectedUsers() {
    this.users = this.examService.getAddedUsers();
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
    return this.addForm.get("examDate") as FormControl;
  }

  get list(): FormControl {
    return this.addForm.get("userList") as FormControl;
  }

}
