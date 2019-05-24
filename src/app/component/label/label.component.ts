import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  constructor(dialogRef: MatDialogRef<LabelComponent>) { }

  ngOnInit() {
  }
  onNoClick(): void {
    // //this.dialogRef.close();
    // this.
  }
}
