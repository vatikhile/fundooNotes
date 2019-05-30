import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';
import {NoteServiceService} from '../../core/service/note/note-service.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-edit-notes',
  templateUrl: './edit-notes.component.html',
  styleUrls: ['./edit-notes.component.scss']
})
export class EditNotesComponent implements OnInit {
  title= new FormControl('');
  description = new FormControl('');
  constructor(private noteService:NoteServiceService,@Inject(MAT_DIALOG_DATA)public data:any,private snackbar:MatSnackBar)  { }

  ngOnInit() {
    this.updateNotes1();
  }
  updateNotes1(){
  console.log("datttttttttt",this.data);
  }
updateNotes(){
  console.log("datttttttttt",this.data);
  var data={
    "noteId":this.data.id,
    "title" : this.title.value,
    "description" : this.description.value
  }


  this.noteService.updateNote(data).subscribe(
    (response:any)=>{
      this.snackbar.open("Note updated sucessfully","",{duration:2000});
    },
    (error)=>{
this.snackbar.open("Error:Note not updated")
    }

  )
}
}
