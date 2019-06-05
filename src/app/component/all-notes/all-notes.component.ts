import { Component, OnInit ,Input} from '@angular/core';
import { NoteServiceService } from '../../core/service/note/note-service.service'
import { UpdateServiceService } from 'src/app/core/service/update/update-service.service';
import { ViewService } from 'src/app/core/service/viewService/view.service';
import { MatDialog} from '@angular/material';
import { EditNotesComponent } from '../edit-notes/edit-notes.component';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.scss']
})

export class AllNotesComponent implements OnInit {

  addNotes: any[];
  message: any;
  views:any;
  direction:string;
  setColor: any;
  archive: any;
  @Input() note;
  @Input() searchText;
  noteId: any;
  countId: any;
  constructor(private noteService: NoteServiceService,private dataService:UpdateServiceService,private view: ViewService,private dialog :MatDialog,private snackbar:MatSnackBar) { }

  ngOnInit() {
    this.getAllNotes();
    this.dataService.currentMessage.subscribe(
      (response: any) => {
        this.message = response;
        this.getAllNotes();
      }
    )
    // this.dataService.currentMessage.subscribe(

    //   (response:any)=>{
    //     console.log(response);
    //     this.message=response;
    //     this.getAllNotes();
    //   }
    // )

    //  this.view.getView().subscribe(
    //   (res) => {
    //     this.views = res;
    //     this.direction = this.views.data;
    //      console.log(this.direction);
    //   });
      
  }
    /*****
   @purpose:for getting the note data i.e title and description from the database for displaying the created note
   ******/
  getAllNotes() {
    console.log("getAllNote");
   
    this.noteService.getNotes().subscribe(
      
      (response:any) => {
      console.log('data notes -->',response);
      this.addNotes =response.data.data;
      // this.noteId=response.data.data[0].id
      // this.countId=response.data.data.length;
      // this.sidenavUpdateLabel();
      // this.dataService.changeMessage('');
      // console.log("Response in get note",this.addNotes);
      // console.log('get note-->',this.addNotes);
      // console.log("response count",this.countId);
      // console.log("response note",this.noteId);
      })
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
             this.addNotes=response.data;
                console.log("data1==>",this.addNotes);
                this.dataService.changeMessage('');          
                this.snackbar.open('note color updated Successfully..', 'End now', {duration: 1000}); 
         },
         error=>{
           console.log(error);
           this.snackbar.open('note color not updated', 'End now', {duration: 1000}); 
         })
     }


     archiveNote(items,$event){

      this.archive=$event
      var data={
        "isArchived":true,
        "noteIdList":[items.id]
      }
      console.log("archive note=-=>",data);
      this.noteService.postArchive(data).subscribe(
        (response:any)=>{
          console.log(response);
          this.dataService.changeMessage('rewq');
  
          this.snackbar.open('note archived Successful', 'End now', {duration: 1000});       
  
        },
        (error)=>{
          console.log(error);
          this.snackbar.open('note not archived', 'End now', {duration: 1000});       
  
        }
      )
      
    }
  

   
}

