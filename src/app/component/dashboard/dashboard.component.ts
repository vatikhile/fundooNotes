import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material';
import { LabelComponent } from '../label/label.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private flag: boolean = false;
  constructor(private matDialog: MatDialog) { }

  ngOnInit() {
  }

  sign() {
    this.flag = !this.flag;

  }

  dialogOpen() {
    console.log('add');
    this.matDialog.open(LabelComponent);
  }
  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

}
