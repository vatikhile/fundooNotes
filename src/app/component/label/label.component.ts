import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NoteServiceService } from '../../core/service/note/note-service.service'
import { Label } from 'src/app/core/model/label/label';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  labelNote: Label = new Label();
  addLabels: any[];
  data: any;
  data1: string;
  
  // label1:Label[] = [];

  constructor(private noteService: NoteServiceService, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.showLabel(); 
  }
  // onNoClick(): void {
  //   // //this.dialogRef.close();
  //   // this.

  // }

  addLabel() {
    console.log("labellll", this.labelNote);
  var data={
    "label":this.labelNote.label,
    "isDeleted":false,
    "userId":localStorage.getItem('Id')
  }
    console.log("new data=>>",data);
    
   // this.labelNote.userId = localStorage.getItem('Id');

   // console.log("data1", this.labelNote.userId);

    this.noteService.addLabel(data).subscribe(

      (response: any) => {
        this.showLabel();
        console.log("sucess label add");

        this.snackbar.open(
          "label is created Successfully", "",
          { duration: 2500 }

        )
      },
      error => {
        console.log("errorddd");

      }
    )
  }
  showLabel() {
    this.noteService.showNoteLabel().subscribe(
      (response: any) => {
        this.addLabels=response.data.details;
      
        console.log(this.addLabels);
        
        // this.snackbar.open(
        //   "Note is created Successfullyiiiiii", "",
        //   { duration: 2500 }
        // )

      },
      error => {

        console.log("error");
      }
    )
  }
}
