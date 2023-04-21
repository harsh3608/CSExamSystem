import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogData } from 'src/app/modules/user/shared/models/technology.model';
import { Candidate } from 'src/app/modules/user/shared/models/user.model';
import { UserService } from 'src/app/modules/user/shared/services/user.service';
import { TechnologyComponent } from 'src/app/modules/user/technology/technology.component';
import { ExamsCrudService } from '../../shared/services/exams-crud.service';
import { ExamsAddComponent } from '../exams-add/exams-add.component';

@Component({
  selector: 'app-add-users-dialog',
  templateUrl: './add-users-dialog.component.html',
  styleUrls: ['./add-users-dialog.component.css']
})
export class AddUsersDialogComponent implements OnInit {
  users: Candidate[] = [];
  selectedUsers: string[] = [];
  index:number = 1;

  constructor(
    public dialogRef: MatDialogRef<ExamsAddComponent>,
    //@Inject(MAT_DIALOG_DATA) public data: DialogData,
    private userService: UserService,
    private examService: ExamsCrudService
  ) {
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (res) => {
        if (res.isSuccess) {
          this.users = res.response;
        };
      }
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  onAdd() {
    this.dialogRef.close();
    this.examService.addUsers(this.selectedUsers);
  }

  onCheckboxChange(id: string) {
    const index = this.selectedUsers.indexOf(id);
    if (index === -1) {
      this.selectedUsers.push(id);
    } else {
      this.selectedUsers.splice(index, 1);
    }
  }

}
