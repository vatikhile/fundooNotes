import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { NoteServiceService } from '../../core/service/note/note-service.service';
import { MatSnackBar } from '@angular/material';
import { UpdateServiceService } from '../../core/service/update/update-service.service'

@Component({
  selector: 'app-edit-notes',
  templateUrl: './edit-notes.component.html',
  styleUrls: ['./edit-notes.component.scss']
})
export class EditNotesComponent implements OnInit {
  constructor(private noteService: NoteServiceService, private snackbar: MatSnackBar, @Inject(MAT_DIALOG_DATA) private data: any, private updateData: UpdateServiceService) { }
  noteData = this.data;
  ngOnInit() {

  }
  updateNotes() {
    var data = {
      "noteId": this.noteData.id,
      "title": this.noteData.title,
      "description": this.noteData.description,
    }
    this.noteService.updateNote(data).subscribe(
      (response: any) => {
        this.updateData.changeMessage('');
        this.snackbar.open("Note updated sucessfully", "", { duration: 2000 });
      },
      (error) => {
        this.snackbar.open("Error:Note not updated")
      }
    )
  }
}
