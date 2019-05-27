import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NoteServiceService } from '../../core/service/note/note-service.service'
import { Label } from 'src/app/core/model/label/label';
import { MatSnackBar } from '@angular/material';
import {UpdateServiceService} from '../../core/service/update/update-service.service'

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
  message: any;
  
  // label1:Label[] = [];

  constructor(private noteService: NoteServiceService, private snackbar: MatSnackBar,private dataService:UpdateServiceService) { }

  ngOnInit() {
    this.showLabel();
  
  }  // onNoClick(): void {
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
        this.dataService.changeMessage('')

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
  deleteLabel(id:any)
  {
this.noteService.deleteLabels(id).subscribe(
  (response:any)=>{
    this.showLabel();

this.snackbar.open("label deleted sucessfully","undo",{duration:2000});
this.update();
  },
  (error)=>{
    this.snackbar.open("Not deleted", "undo",{duration:2000});

  }
)
// this.dataService.currentMessage.subscribe(data => {
//   console.log('after deleting', data);
//   this.addLabels = data;
// });
  }
  update(){
    this.dataService.currentMessage;
  }
}
