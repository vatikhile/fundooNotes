import { Component, OnInit } from '@angular/core';
import {  MatSnackBar } from '@angular/material';
import { Notes } from '../../core/model/Notes/notes';
import { NoteServiceService } from '../../core/service/note/note-service.service'


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  private flag: Boolean = false;

  addNote: Notes = new Notes();
  constructor(private noteservice: NoteServiceService, private snackbar: MatSnackBar) { }
  ngOnInit() {
  }
  //Add the new note in database after click on close button
  addNotes() {
    console.log("wewqeg", this.addNote);
    this.show();
    console.log("onClose():: executed");
    console.log(this.addNote.title);
    this.noteservice.addNote(this.addNote).subscribe(
      (response: any) => {

        console.log(response);
        this.snackbar.open(
          "Note is created Successfully","",
          { duration: 2500 }
        )

      }

    )
  }

  //After click on small matcard it toggle the value of flag
  show() {
    this.flag = !this.flag;
  }
}
