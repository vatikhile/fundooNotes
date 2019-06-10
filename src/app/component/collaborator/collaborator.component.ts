import { Component, OnInit,Inject,Input} from '@angular/core';
import { MatSnackBar, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import {UpdateServiceService} from '../../core/service/update/update-service.service';

import {HttpServiceService} from '../../core/service/http/http-service.service';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {

search: any[];
 searchvalue =new FormControl('searchvalue');
 firstName=new FormControl('')
 addNote:any[];
  noteId: any;
  message: string;
  constructor(private snackbar:MatSnackBar,private dialog:MatDialog,private update:UpdateServiceService,private form: FormControl,private http:HttpServiceService,@Inject(MAT_DIALOG_DATA) public data: any) { }

     first=localStorage.getItem('firstName');
   last=localStorage.getItem('lastName');
   email1=localStorage.getItem('email');
      id=this.data.id
   collaborators=this.data.collaborators

  ngOnInit() {
    this.update.currentMessage.subscribe(
            response=>{
                      this.message=response;
                      this.collaborators
                      //this.updateColor();
                      // console.log("34r5343564wew3");           
           })

  }
  @Input() notecollab:any

  searchList(){
  var data={
    "searchWord":this.searchvalue.value
  }
  console.log("new data==>",data);
  
  this.http.postSearch('user/searchUserList',data).subscribe(
    (response:any)=>{
      console.log(response);
      this.search=response.data.details
      console.log(this.search);
      
    },
    (error)=>{
      console.log(error);
      
    }
  )
}
addCollab(id:any){
console.log("adada",this.search[0]);

console.log("iddddd",id);

  
  this.http.postData('notes/'+id+'/AddcollaboratorsNotes',this.search[0]).subscribe(
    (response:any)=>{
      console.log(response);
      this.update.changeMessage('');          

     this.snackbar.open('collab successfully...', 'End now', {duration: 1000});  
    },
    (error)=>{
      console.log(error);
     this.snackbar.open('error in collab', 'End now', {duration: 1000}); 

      
    }
  )
}
  /*Get All Note List*/
  getAllNote(){
    this.http.getNote('notes/getNotesList').subscribe(
      (response:any) => {
        console.log("get response===>",response);
        this.addNote=this.notecollab
        console.log("Response in get note",this.addNote);
      //  this.snackbar.open('get note successfully', 'End now', {duration: 1000});
      },
      error=> {
       // this.snackbar.open('get note error', 'End now', {duration: 3000});
        console.log("error: ",error)
      }
      )
  }


  closeDialog(){
    this.dialog.closeAll();
  }
}




















// import { Component, OnInit, Inject, Input } from '@angular/core';
// import { DataService } from 'src/app/services/dataService/data.service';
// import { MatSnackBar, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
// import { NoteService } from 'src/app/services/noteService/note.service';
// import { FormControl } from '@angular/forms';

// @Component({
//   selector: 'app-collaborator',
//   templateUrl: './collaborator.component.html',
//   styleUrls: ['./collaborator.component.scss']
// })
// export class CollaboratorComponent implements OnInit {
//   search: any[];
//  searchvalue =new FormControl('');
//  firstName=new FormControl('')
//  addNote:any[];
//   noteId: any;
//   message: string;
//  //searchvalue:any; 
//   constructor(private dataService:DataService,private snackbar : MatSnackBar,public dialog: MatDialog,private noteService:NoteService,@Inject(MAT_DIALOG_DATA) public data: any) { }
//    first=localStorage.getItem('firstName');
//    last=localStorage.getItem('lastName');
//    email1=localStorage.getItem('email');
//    id=this.data.id
//    collaborators=this.data.collaborators
//   ngOnInit() { 
//     this.dataService.currentMessage.subscribe(
//       response=>{
//                 this.message=response;
//                 this.collaborators
//                 //this.updateColor();
//                 console.log("34r5343564wew3");           
//      })
//   }
  
//   @Input() notecollab:any


// searchList(){
//   var data={
//     "searchWord":this.searchvalue.value
//   }
//   console.log("new data==>",data);
  
//   this.noteService.postSearch('user/searchUserList',data).subscribe(
//     (response:any)=>{
//       console.log(response);
//       this.search=response.data.details
//       console.log(this.search);
      
//     },
//     (error)=>{
//       console.log(error);
      
//     }
//   )
// }

// addCollab(id:any){
// console.log("adada",this.search[0]);

// console.log("iddddd",id);

  
//   this.noteService.postData('notes/'+id+'/AddcollaboratorsNotes',this.search[0]).subscribe(
//     (response:any)=>{
//       console.log(response);
//       this.dataService.changeMessage('rewq');          

//      this.snackbar.open('collab successfully...', 'End now', {duration: 1000});  
//     },
//     (error)=>{
//       console.log(error);
//      this.snackbar.open('error in collab', 'End now', {duration: 1000}); 

      
//     }
//   )
// }
 
//   /*Get All Note List*/
//   getAllNote(){
//     this.noteService.getNote('notes/getNotesList').subscribe(
//       (response:any) => {
//         console.log("get response===>",response);
//         this.addNote=this.notecollab
//         console.log("Response in get note",this.addNote);
//       //  this.snackbar.open('get note successfully', 'End now', {duration: 1000});
//       },
//       error=> {
//        // this.snackbar.open('get note error', 'End now', {duration: 3000});
//         console.log("error: ",error)
//       }
//       )
//   }


//   closeDialog(){
//     this.dialog.closeAll();
//   }
// }
