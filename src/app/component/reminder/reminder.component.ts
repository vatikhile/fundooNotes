import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}












// import { Component, OnInit } from '@angular/core';

// import { Router } from '@angular/router';
// import { MatSnackBar } from '@angular/material';
// import { NoteService } from 'src/app/services/noteService/note.service';
// import { DataService } from 'src/app/services/dataService/data.service';
// import {MatDialog} from '@angular/material';
// import { DialogComponent } from '../dialog/dialog.component';
// @Component({
//   selector: 'app-reminder',
//   templateUrl: './reminder.component.html',
//   styleUrls: ['./reminder.component.scss']
// })
// export class ReminderComponent implements OnInit {
//   addNote: any[];
//   message: any;
//   setColor: any;
//   noteId: any;
//   sfsf: any;
//   setReminder: any;
//   countId: any;
//   number: any;
//   getLabel: any;
//   lableId: any;
//   labeldata: any;
//   lableName: any;
//   archive: any;
//   constructor(private noteService: NoteService,public dialog: MatDialog, private dataService:DataService, private router: Router,private snackbar : MatSnackBar) { }

//   ngOnInit() {
//     this.getAllReminderNote();
//     //this.updateColor
// this.dataService.currentMessage.subscribe(
//  response=>{
//            this.message=response;
//            this.getAllReminderNote();
//            //this.updateColor();
// })
//   }


//    /** Update Note Color*/
//    updateColor(items,$event){
//     this.setColor=$event
//    console.log("get color" ,this.setColor);
//    var noteData={
//      "color":this.setColor,
//      "noteIdList":[items.id]
//    }
//    console.log("jdfdhfhd",noteData);
   
//      this.noteService.postData('notes/changesColorNotes',noteData).subscribe(
//        (response:any)=>{
//            console.log(response);
//            this.addNote=response.data;
//               console.log("data1==>",this.addNote);
//               this.dataService.changeMessage('rewq');          
//               this.snackbar.open('note color updated Successfully..', 'End now', {duration: 1000}); 
//        },
//        error=>{
//          console.log(error);
//          this.snackbar.open('note color not updated', 'End now', {duration: 1000}); 
//        }
//      )
//    }
 
 
 
 
 
 
 
 
 
 
//  /** Update Note Reminder*/
//    updateReminder(items,$event){
     
//        this.setReminder=$event
     
//     console.log("get reminder" ,this.setReminder);
//     var noteData={
//       "reminder":this.setReminder,
//       "noteIdList":[items.id]
//     }
//     console.log("jdfdhfhd",noteData);
    
//       this.noteService.postData('notes/addUpdateReminderNotes',noteData).subscribe(
//         (response:any)=>{
//             console.log(response);
//             this.addNote=response.data;
//             this.dataService.changeMessage('rewq');
//                console.log("data1==>",this.addNote);         
//                this.snackbar.open('note reminder added Successfully..', 'End now', {duration: 1000}); 
//         },
//         error=>{
//           console.log(error);
//           this.snackbar.open('reminder not set', 'End now', {duration: 1000}); 
//         }
//       )
//     }
 
 
 
 
 
//  /*Delete Note*/
//    deleteNote(items,$event){
//      this.sfsf=$event;
//      var data={
//        "noteIdList":[items.id]
//      }
 
//      console.log("delete Note",data);
 
//      this.noteService.postData('notes/deleteForeverNotes',data).subscribe(
//        (response:any)=>{
//            console.log(response);
//            this.addNote=response.data;
//               console.log("data1==>",this.addNote);  
//               this.dataService.changeMessage('rewq');
//               this.snackbar.open('note deleted Successful', 'End now', {duration: 1000});       
//        },
//        error=>{
//          console.log(error);
//          this.snackbar.open('not not deleted', 'End now', {duration: 1000});
         
//        }
//      )
     
//    }
 
//    archiveNote1(items,$event){
//      this.archive=$event
//      var data={
//        "isArchived":true,
//        "noteIdList":[items.id]
//      }
//      console.log("archive note=-=>",data);
//      this.noteService.postArchive('notes/archiveNotes',data).subscribe(
//        (response:any)=>{
//          console.log(response);
//          this.dataService.changeMessage('rewq');
 
//          this.snackbar.open('note archived Successful', 'End now', {duration: 1000});       
 
//        },
//        (error)=>{
//          console.log(error);
//          this.snackbar.open('note not archived', 'End now', {duration: 1000});       
 
//        }
//      )
     
//    }
 
 
//    /*Get All Note List*/
//    getAllReminderNote(){
//      //this.updateColor();
//      this.noteService.getNote('notes/getReminderNotesList').subscribe(
//        (response:any) => {
//          this.addNote=response.data.data
//          console.log("reminder data=>>",this.addNote);
//         // this.noteId=response.data.data[0].id
//        //  this.countId=response.data.data.length
//          //console.log("srer",this.countId);
//         // console.log("noteId",this.noteId);
//          console.log("Response in get note",this.addNote);
//          this.snackbar.open('get reminder note successfully', 'End now', {duration: 1000});
//        },
//        error=> {
//         this.snackbar.open('Error in get reminder notes', 'End now', {duration: 3000});
//          console.log("error: ",error)
//        }
//        )
//    }
 
 
//    /**Open Dialog Box */
//    openDialog(items:any) {
//      const dialogRef = this.dialog.open(DialogComponent,{
//        data:{
//               title:items.title,
//               description:items.description,
//                id:items.id,
//                color:items.color,
//                reminder:items.reminder
//        }
//      });
 
//      dialogRef.afterClosed().subscribe(result => {
//        console.log(`Dialog result: ${result}`);
//      });
//    }

// }
