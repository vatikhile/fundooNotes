import { Component, OnInit} from '@angular/core';
import { MatTooltipModule, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Notes } from '../../core/model/Notes/notes';
import { MatIconModule } from '@angular/material/icon';
import { NoteServiceService } from '../../core/service/note/note-service.service'
// import { NotesService } from "../../core/model/Notes/notes.service";

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  private flag: Boolean = false;


  addNote: Notes = new Notes();
  constructor(private mattooltip: MatTooltipModule, private noteservice: NoteServiceService, private router: Router, private formBuilder: FormBuilder, private snackbar: MatSnackBar) { }
  ngOnInit() {
  }

  addNotes() {
    console.log("wewqeg", this.addNote);
    this.show();


    console.log("onClose():: executed");
    console.log(this.addNote.title);
    this.noteservice.addNote(this.addNote).subscribe(
      (response: any) => {
        // var res=response.data.data;
        // this.addNote=res;
        // if (response.statusCode === 100) {
        console.log(response);
        this.snackbar.open(
          "Note is created Successfully",
          "undo",
          { duration: 2500 }
        )

      }

    )
}


show() {
this.flag = !this.flag;
}
}
