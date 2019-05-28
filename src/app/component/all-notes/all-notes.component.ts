import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from '../../core/service/note/note-service.service'
import { UpdateServiceService } from 'src/app/core/service/update/update-service.service';
import { ViewService } from 'src/app/core/service/viewService/view.service';
// import { UpdateServiceService } from 'src/app/core/service/update/update-service.service';
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
  constructor(private noteService: NoteServiceService,
    private dataService:UpdateServiceService,private view: ViewService) { }

  ngOnInit() {
    this.getAllNotes();
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
      this.addNotes =response.data.data;
      console.log('get note-->',this.addNotes);
      
    })
  
    }

   
}

