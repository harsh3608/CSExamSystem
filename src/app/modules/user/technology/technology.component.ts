import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogData } from '../shared/models/technology.model';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TechnologyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router: Router
  ) {}

  ngOnInit() {

  }

  onCancel(){
    this.dialogRef.close();
  }

  onTakeTest(id: number) {
    this.dialogRef.close();
    this.router.navigate(['exam/',id]);
  }

}
