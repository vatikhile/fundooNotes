import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatDialog } from '@angular/material';
import { LabelComponent } from '../label/label.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NoteServiceService } from 'src/app/core/service/note/note-service.service';
import {UpdateServiceService} from '../../core/service/update/update-service.service'
import { Response } from 'selenium-webdriver/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private flag: boolean = false;
 
  addLabels: any=[];
  email: string;
  firstName: string;
  message: any;
  @ViewChild(LabelComponent) child;
  constructor(private matDialog: MatDialog,private noteService: NoteServiceService,private dataService:UpdateServiceService) {
    this.firstName= localStorage.getItem('firstName'),
    this.email=localStorage.getItem('email')
   }

  ngOnInit() {
   this.showLabel();
  //  this.addLabels=this.child.deleteLabel(){
  //    this.dataService.
  //  }
  // this.child.addLabels;
  // this.showLabel();
 
     this.sidenavUpdateLabel();
     
     
        // this.deleteLabel();
          // this.snackbar.open(
          //   "Note is created Successfullyiiiiii", "",
          //   { duration: 2500 }
          // )
}   

  showLabel() {
    this.noteService.showNoteLabel().subscribe(
      (response: any) => {
        this.addLabels=response.data.details;
      // this.addLabels=this.child.addLabels
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
//   deleteLabel(){
//     this.noteService.deleteLabels(localStorage.getItem('Id')).subscribe(
//       (response:any)=>{
// console.log("sucess");
// this.dataService.changeMessage("");
// this.showLabel();
//       })
//   }


  // sign() {
  //   this.flag = !this.flag;

  // }

  dialogOpen() {
    
    console.log('add');
    this.matDialog.open(LabelComponent);
  }
  onSignout() {
    localStorage.clear();

  }
  
  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
  sidenavUpdateLabel()
  {
    this.dataService.currentMessage.subscribe(
      (response:any)=>{
        this.message=response;
        this.showLabel();
        // this.deleteLabel();
      }
    )
  }
}
