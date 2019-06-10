import { Component, OnInit ,Input} from '@angular/core';
import { NoteServiceService } from '../../core/service/note/note-service.service'
import { UpdateServiceService } from 'src/app/core/service/update/update-service.service';
import { ViewService } from 'src/app/core/service/viewService/view.service';
import { MatDialog} from '@angular/material';
import { EditNotesComponent } from '../edit-notes/edit-notes.component';
import { MatSnackBar } from '@angular/material';
import { Notes } from 'src/app/core/model/Notes/notes';

@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.scss']
})

export class AllNotesComponent implements OnInit {

  addNotes: any[];
  Notes: any[];
  message: any;
  views:any;
  
  setColor: any;
  archive: any;
  @Input() note;
  @Input() notesData;
  @Input() searchText;
  // @Input()notesData: any;
  // noteId: any;
  countId: any;
  direction1: string='wrap';
  allign:string='';
  direction:string="row";
  setReminder: any;
  noteId: any;
  // addNote: any;
  // toggle: Boolean=true;

  constructor(private noteService: NoteServiceService,private dataService:UpdateServiceService,private view: ViewService,private dialog :MatDialog,private snackbar:MatSnackBar) { }

  ngOnInit() {
    this.getAllNotes();
    // this.toggle=this.direction
    // this.dataService.currentMessage.subscribe(
    //   (response: any) => {
    //     this.message = response;
    //     this.getAllNotes();
    //   }
    // )
    this.dataService.currentMessage.subscribe(

      (response:any)=>{
        console.log(response);
        this.message=response;
        this.getAllNotes();
      }
    )

     this.view.getView().subscribe(
      (res) => {
        this.views = res;
        this.direction = this.views.data;
        if(this.direction=='row')
        {
          this.direction1='wrap';
          this.allign=''
          console.log("wrap",this.direction1);
          
        }
        else{
          this.direction1=''
          this.allign='center'
          console.log("no wrap",this.direction1);
        }
        // this.toggle=this.views.data1;
         console.log(this.direction);
      });
      
      
  }
  
    /*****
   @purpose:for getting the note data i.e title and description from the database for displaying the created note
   ******/
  getAllNotes() {
    console.log("getAllNote");
   
    this.noteService.getNotes().subscribe(
      
      (response:any) => {
      console.log('data notes -->',response);
      this.Notes =response.data.data;
      
      this.noteId=response.data.data[0].id
      for(var i=0;i<this.Notes.length/3;i++)
      {
        for(var j=0;j<3;j++){
          this.addNotes=this.Notes;
          console.log(this.Notes[j]);
          // console.log(this.addNotes[j]);
          
          
        }
         console.log("\n");
      }
          

// this.addNotes=Notes[i];
// console.log("vvv",this.Notes[j]);
// this.Notes=Notes[i];
// this.addNotes=this.Notes[j];
// this.dataService.changeMessage('');
        

        
        
      
      
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
             //this.addNotes=response.data;
                console.log("data1==>",this.addNotes);
                // this.dataService.changeMessage(''); 
                 this.getAllNotes();        
                this.snackbar.open('note color updated Successfully..', 'End now', {duration: 1000}); 
                
         },
         error=>{
           console.log(error);
           this.snackbar.open('note color not updated', 'End now', {duration: 1000}); 
         })
     }
// dummy 
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
  this.getAllNotes();
          this.snackbar.open('note archived Successful', 'End now', {duration: 1000});       
  
        },
        (error)=>{
          console.log(error);
          this.snackbar.open('note not archived', 'End now', {duration: 1000});       
  
        }
      )
      
    }
    updateReminder(items,$event){
    
      this.setReminder=$event
    
   console.log("get reminder" ,this.setReminder);
   var noteData={
     "reminder":this.setReminder,
     "noteIdList":[items.id]
   }
   console.log("jdfdhfhd",noteData);
   
     this.noteService.postData(noteData).subscribe(
       (response:any)=>{
           console.log(response);
          //  this.addNotes=response.data;
           this.dataService.changeMessage('rewq');
          this.getAllNotes();
              console.log("data1==>",this.addNotes);         
              this.snackbar.open('note reminder added Successfully..', 'End now', {duration: 1000}); 
       },
       error=>{
         console.log(error);
         this.snackbar.open('reminder not set', 'End now', {duration: 1000}); 
       }
     )
   }
  

   
}

