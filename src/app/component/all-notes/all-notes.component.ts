import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from '../../core/service/note/note-service.service'
@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.scss']
})
export class AllNotesComponent implements OnInit {
  addNotes: any[];
  constructor(private noteService: NoteServiceService) { }

  ngOnInit() {
    this.getAllNotes();
  }
  getAllNotes() {
console.log("gstfwcdfcfcfc");

    this.noteService.getNotes().subscribe(
      (response: any) => {
        this.addNotes = response.data.data;
        console.log("get notes===>", this.addNotes);


      }

    )

  }
}

