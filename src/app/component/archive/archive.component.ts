import { Component, OnInit } from '@angular/core';
import { UpdateServiceService } from 'src/app/core/service/update/update-service.service';
import { MatSnackBar } from '@angular/material';
import { Notes } from '../../core/model/Notes/notes';
import {Label} from '../../core/model/label/label';
import {NoteServiceService} from '../../core/service/note/note-service.service'
import { ViewService } from 'src/app/core/service/viewService/view.service';
import { MatDialog} from '@angular/material';
import { EditNotesComponent } from '../edit-notes/edit-notes.component';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  userNote: any;
  // listView: boolean;
  color: string;
  // colorCode: string[][] =
  //   [['white', 'lightGreen', 'purple', 'red'],
  //   ['orange', 'teal', 'pink', 'darkBlue'], ['blue', 'brown', 'yellow', 'gray']]
  //   ;
  views:any;
  direction:string;
    labels = new Label();
  messageSource: string;
  archive: any;
  addNote: any;
  message: any;
  setColor: any;
  constructor( private update:UpdateServiceService,private snackbar:MatSnackBar,private dialog :MatDialog,private view: ViewService,private noteService:NoteServiceService) {
    update.currentMessage.subscribe(
      status => { this.messageSource = status }
    )
    this.update.currentMessage.subscribe(data => { this.userNote = data })
  }
   

  ngOnInit() {
    this.getArchiveNotes();
    console.log("34r5343564wew3");
    this.update.currentMessage.subscribe(

      (response:any)=>{
        console.log(response);
        this.message=response;
        this.getArchiveNotes();
      }
    )

    //  this.view.gridview().subscribe(
    //   (res) => {
    //     this.views = res;
    //     this.direction = this.views.data;
    //      console.log(this.direction);
    //   });
      


  }
  archiveNote(items,$event){

    this.archive=$event
    var data={
      "isArchived":false,
      "noteIdList":[items.id]
    }
    console.log("archive note=-=>",data);
    this.noteService.postArchive(data).subscribe(
      (response:any)=>{
        console.log(response);
        this.update.changeMessage('rewq');

        this.snackbar.open('note archived Successful', 'End now', {duration: 1000});       

      },
      (error)=>{
        console.log(error);
        this.snackbar.open('note not archived', 'End now', {duration: 1000});       

      }
    )
    
  }
  getArchiveNotes(){
    console.log("ewr4w3e543564654657");
    
    
    this.noteService.getNoteArchive().subscribe(
           (response:any) => {
             this.addNote=response.data.data
             console.log("Archive data=>>",this.addNote);
             //this.isArchived=this.addNote.filter(items => items.isArchived==true)
             //this.noteId=response.data.data[0].id
            // this.countId=response.data.data.length
            //  console.log("srer",this.countId);
            //  console.log("noteId",this.noteId);
             console.log("Response in get note",this.addNote);
             this.snackbar.open('get archived note successfully', 'End now', {duration: 1000});
           },
           error=> {
            this.snackbar.open('get archive note error', 'End now', {duration: 1000});
             console.log("error: ",error)
           }
           )
  }

  openDialog(items:any){
    this.dialog.open(EditNotesComponent,{
      data:{
        title:items.title,
        description:items.description,
        id:items.id,
        color:items
    }
    });
    console.log("hhh",items.title,);
    
  }
  changeColor(items,$event)
    {
      this.setColor=$event
     console.log("get color" ,this.setColor);
     var data={
       "color":this.setColor,
       "noteIdList":[items.id]
     }
     console.log("jdfdhfhd",data);
     
       this.noteService.postColor(data).subscribe(
         (response:any)=>{
             console.log(response);
             this.addNote=response.data;
                console.log("data1==>",this.addNote);
                this.update.changeMessage('');          
                this.snackbar.open('note color updated Successfully..', 'End now', {duration: 1000}); 
         },
         error=>{
           console.log(error);
           this.snackbar.open('note color not updated', 'End now', {duration: 1000}); 
         })
     }

}











// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { MatSnackBar } from '@angular/material';
// import { NoteService } from 'src/app/services/note.service';
// import { DataService } from 'src/app/services/data.service';
// import {MatDialog} from '@angular/material';
// import { DialogComponent } from '../dialog/dialog.component';
// @Component({
//   selector: 'app-archive',
//   templateUrl: './archive.component.html',
//   styleUrls: ['./archive.component.scss']
// })
// export class ArchiveComponent implements OnInit {
//   addNote: any[];
//   message: any;
//   addNote1:any[];
//   setColor: any;
//   noteId: any;
//   isArchived:any[];
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
//     this.getArchiveNotes();
//     //this.updateColor
// this.dataService.currentMessage.subscribe(
//  response=>{
//            this.message=response;
//            this.getArchiveNotes();
//            //this.updateColor();
//            console.log("34r5343564wew3");
           
// })
//   }



//   /** Update Note Color*/
//   updateColor(items,$event){
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
 
   
 
 
//    /*Get All Note List*/
//   //  getAllNote(){
//   //    //this.updateColor();
//   //    this.noteService.getNote('notes/getNotesList').subscribe(
//   //      (response:any) => {
//   //        this.addNote=response.data.data
//   //        console.log("data=>>",this.addNote);
//   //        this.isArchived=this.addNote.filter(items => items.isArchived==true)
//   //        this.noteId=response.data.data[0].id
//   //        this.countId=response.data.data.length
//   //        console.log("srer",this.countId);
//   //        console.log("noteId",this.noteId);
//   //        console.log("Response in get note",this.addNote);
//   //        this.snackbar.open('get note successfully', 'End now', {duration: 1000});
//   //      },
//   //      error=> {
//   //       // this.snackbar.open('get note error', 'End now', {duration: 3000});
//   //        console.log("error: ",error)
//   //      }
//   //      )
//   //  }


//   getArchiveNotes(){
//     console.log("ewr4w3e543564654657");
    
    
//     this.noteService.getNote('notes/getArchiveNotesList').subscribe(
//            (response:any) => {
//              this.addNote1=response.data.data
//              console.log("Archive data=>>",this.addNote1);
//              //this.isArchived=this.addNote.filter(items => items.isArchived==true)
//              //this.noteId=response.data.data[0].id
//             // this.countId=response.data.data.length
//              console.log("srer",this.countId);
//              console.log("noteId",this.noteId);
//              console.log("Response in get note",this.addNote);
//              this.snackbar.open('get archived note successfully', 'End now', {duration: 1000});
//            },
//            error=> {
//             this.snackbar.open('get archive note error', 'End now', {duration: 1000});
//              console.log("error: ",error)
//            }
//            )
//   }
 
 
 



//   archiveNote1(items,$event){
//     this.archive=$event
//     var data={
//       "isArchived":false,
//       "noteIdList":[items.id]
//     }
//     console.log("archive note=-=>",data);
//     this.noteService.postArchive('notes/archiveNotes',data).subscribe(
//       (response:any)=>{
//         console.log(response);
//         this.dataService.changeMessage('rewq');

//         this.snackbar.open('note archived Successful', 'End now', {duration: 1000});       

//       },
//       (error)=>{
//         console.log(error);
//         this.snackbar.open('note not archived', 'End now', {duration: 1000});       

//       }
//     )
    
//   }

  
//    /** Add Label To Note*/
//     addLabelToNote(items,$event){
//      this.getLabel=$event
//      // var data={
//      //   "noteId":items.id,
//      //   "lableId":this.getLabel
//      // }

//      this.noteId=items.id;
//      this.lableId=this.getLabel
//      console.log("new Label data==>",this.noteId,this.lableId);
//      this.noteService.addLabelNote('notes/'+this.noteId+'/addLabelToNotes/'+this.lableId+'/add').subscribe(
//        (response:any)=>{
//          console.log(response);
//                    this.addNote=response.data.details
//                  this.snackbar.open('label added to note successfully', 'End now', {duration: 1000});
 
//        },
//        (error)=>{
//          console.log(error);
//          this.snackbar.open('label not added', 'End now', {duration: 1000});
 
         
//        }
//      )
     
//     }
 
 
 
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