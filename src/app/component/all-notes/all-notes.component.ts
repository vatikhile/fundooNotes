import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from '../../core/service/note/note-service.service'
import { UpdateServiceService } from 'src/app/core/service/update/update-service.service';
@Component({
  selector: 'app-all-notes',
  templateUrl: './all-notes.component.html',
  styleUrls: ['./all-notes.component.scss']
})
export class AllNotesComponent implements OnInit {
  addNotes: any[];
  constructor(private noteService: NoteServiceService,
    private updateNote : UpdateServiceService) { }

  ngOnInit() {
    this.getAllNotes();
  }
  //for getting the note data i.e title and description from the database for displaying the created note
  getAllNotes() {
    console.log("getAllNote");
   
    this.updateNote.updated.subscribe(response => {
      console.log('data notes -->',response);
      this.addNotes =response;
      console.log('get note-->',this.addNotes);
      
    })
  
    }
}

