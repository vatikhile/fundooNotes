import { Component, OnInit, Input } from '@angular/core';
import { NoteServiceService } from '../../core/service/note/note-service.service'
import { UpdateServiceService } from 'src/app/core/service/update/update-service.service';
import { ViewService } from 'src/app/core/service/viewService/view.service';
import { MatDialog } from '@angular/material';
import { EditNotesComponent } from '../edit-notes/edit-notes.component';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.scss']
})
export class AllNotesComponent implements OnInit {

  addNotes: any[];
  Notes: any[];
  message: any;
  views: any;
  // selectable = true;
  removable = true;
  toggle:boolean;

  setColor: any;
  archive: any;
  @Input() note;
  @Input() notesData;
  @Input() searchText;
  // @Input()notesData: any;
  // noteId: any;
  countId: any;
  direction1: string = 'wrap';
  allign: string = '';
  direction: string = "row";
  setReminder: any;
  noteId: any;
  // userId: string;
  // addNote: any;
  // toggle: Boolean=true;
  userId=localStorage.getItem(this.userId)
  user: string;
  Id: any;
  itemId: any[];
  pinedCards: any[];
  // check: boolean ;

  constructor(private noteService: NoteServiceService, private dataService: UpdateServiceService, private view: ViewService, private dialog: MatDialog, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.getAllNotes();
   
    this.dataService.currentMessage.subscribe(

      (response: any) => {
        console.log(response);
        this.message = response;
        this.getAllNotes();
        // this.view.getNotes();
        
      }
    )

    this.view.getView().subscribe(
      (res) => {
        this.views = res;
        this.direction = this.views.data;
        if (this.direction == 'row') {
          this.direction1 = 'wrap';
          this.allign = ''
          console.log("wrap", this.direction1);

        }
        else {
          this.direction1 = ''
          this.allign = 'center'
          console.log("no wrap", this.direction1);
        }
        // this.toggle=this.views.data1;
        console.log(this.direction);
      });

      // this.pinedCards = this.addNotes.filter(function (el) {
      //   return (el.isPined === true);
      //   });
      //   console.log("pinnnnn",this.pinedCards);
        

  }



  /*****
 @purpose:for getting the note data i.e title and description from the database for displaying the created note
 ******/
  getAllNotes() {
    console.log("getAllNote");

    this.noteService.getNotes().subscribe(

      (response: any) => {
      //  if( response.length=null)
      //  {
      //    this.check=false;
      //    console.log("null");
         
      //  }
      //  else{
      //    this.check=true;
      //    console.log("true");
         
      //  }
      // for( var i=0; i<=response.length;i++)
      // {
      //   if(response[i].isPined= false)
      //   {
      //     this.check= true;
      //   }
      //   else
      //   {
      //     this.check= false;

      //   }

      // }
        console.log('data notes -->', response);
        this.addNotes = response.data.data;
// this.pin();
        this.noteId = response.data.data[0].id
        // if(this.addNotes.length=null)
        
        // {
        //   this.check=true;
        // }
        // else{
        //   this.check=false;
        //   return this.addNotes;
        // }
        // this.dataService.changeMessage('');
        // for (var i = 0; i < this.Notes.length / 3; i++) {
        //   for (var j = 0; j < 3; j++) {
        //     this.addNotes = this.Notes;
        //     console.log(this.Notes[j]);
        //     console.log('nodeId',this.noteId)
            // console.log(this.addNotes[j]);


          // }
          // console.log("\n");
        // }

      })

  }
  openDialog(items: any) {
    this.dialog.open(EditNotesComponent, {
      data: {
        title: items.title,
        description: items.description,
        id: items.id,
        color: items,
        isPined:items.isPined
      }
    });
    console.log("hhh", items.title);

  }
  changeColor(items, $event) {
    this.setColor = $event
    console.log("get color", this.setColor);
    var data = {
      "color": this.setColor,
      "noteIdList": [items.id]
    }
    console.log("jdfdhfhd", data);

    this.noteService.postColor(data).subscribe(
      (response: any) => {
        console.log(response);
        //this.addNotes=response.data;
        console.log("data1==>", this.addNotes);
        // this.dataService.changeMessage(''); 
        this.getAllNotes();
        this.snackbar.open('note color updated Successfully..', 'End now', { duration: 1000 });

      },
      error => {
        console.log(error);
        this.snackbar.open('note color not updated', 'End now', { duration: 1000 });
      })
  }

  archiveNote(items, $event) {

    this.archive = $event
    var data = {
      "isArchived": true,
      "noteIdList": [items.id]
    }
    console.log("archive note=-=>", data);
    this.noteService.postArchive(data).subscribe(
      (response: any) => {
        console.log(response);
        this.dataService.changeMessage('rewq');
        this.getAllNotes();
        this.snackbar.open('note archived Successful', 'End now', { duration: 1000 });

      },
      (error) => {
        console.log(error);
        this.snackbar.open('note not archived', 'End now', { duration: 1000 });

      }
    )

  }
  updateReminder(items, $event) {

    this.setReminder = $event

    console.log("get reminder", this.setReminder);
    var noteData = {
      "reminder": this.setReminder,
      "noteIdList": [items.id]
    }
    console.log("jdfdhfhd", noteData);

    this.noteService.postData(noteData).subscribe(
      (response: any) => {
        console.log(response);
        //  this.addNotes=response.data;
        this.dataService.changeMessage('rewq');
        this.getAllNotes();
        console.log("data1==>", this.addNotes);
        this.snackbar.open('note reminder added Successfully..', 'End now', { duration: 1000 });
      },
      error => {
        console.log(error);
        this.snackbar.open('reminder not set', 'End now', { duration: 1000 });
      }
    )
  }
  removeReminder(id:any){
    console.log("remindeer");
    
   this.user=this.userId
    this.noteService.deleteReminder(id).subscribe(
      (response)=>{
        this.snackbar.open('sucessfully deleted reminder',"",{duration:2000})
      },
      (error)=>{
        this.snackbar.open("reminder not deleted","",{duration:2000})
      }
    )
  }
pin(id:any){
  this.Id=id;
  // {
  //   "isPined":true,
  //   "noteIdList": [""]
  // }data
var data={
  "noteIdList":[id],
  "isPined": true
 

}
console.log("pin true",data);

  this.noteService.pin(data).subscribe(
    (response:any)=>{
      // this.view.getNotes();
this.getAllNotes();
      this.snackbar.open("Note is pinned sucessfully","",{duration:2000});
      this.dataService.changeMessage('');
      // this.getAllNotes();
      
    },
    (error)=>{
      this.snackbar.open("Note is not pinned","",{duration:2000});
      console.log("aaabc",error);
    }
  )
}
unPin(id:any){
this.Id=''
var data={
  "noteIdList":[id],
  "isPined": false
 

}
console.log("unpin false",data);

  this.noteService.pin(data).subscribe(
    (response:any)=>{
      // this.view.getNotes();
      this.getAllNotes();
      this.snackbar.open("Note is unpinned sucessfully","",{duration:2000});
      this.dataService.changeMessage('');
      // this.getAllNotes();
      
    },
    (error)=>{
      this.snackbar.open("Note is not pinned","",{duration:2000});
      console.log("aaabc",error);
    }
  )
}
// this.view.search().subscribe(
//   (res) => {
  
  
//   })
}

// this.pinedCards = this.cards.filter(function (el) {
//   return (el.note.isPined === true);
//   });



