import { Component, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material';
import { LabelComponent } from '../label/label.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NoteServiceService } from 'src/app/core/service/note/note-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private flag: boolean = false;
 
  addLabels: any=[];
  constructor(private matDialog: MatDialog,private noteService: NoteServiceService) { }

  ngOnInit() {
    
      this.noteService.showNoteLabel().subscribe(
        (response: any) => {
          this.addLabels=response.data.details;
        
          console.log(this.addLabels);
          console.log("dsassss");
          
        })
          // this.snackbar.open(
          //   "Note is created Successfullyiiiiii", "",
          //   { duration: 2500 }
          // )
  
        
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
