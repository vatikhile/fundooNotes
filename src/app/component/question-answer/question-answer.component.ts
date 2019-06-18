import { Component, OnInit } from '@angular/core';
import { UpdateServiceService } from '../../core/service/update/update-service.service'
import {ViewService} from '../../core/service/viewService/view.service';
import {QuetionAnsService} from '../../core/service/questionAns/quetion-ans.service'
import {NoteServiceService} from '../../core/service/note/note-service.service';
import {EditorService} from '../../core/service/editor/editor.service'

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss']
})
export class QuestionAnswerComponent implements OnInit {
  id: any;
  noteId: any;
  check: any[];
  inter: any;
  inter1: string;
  addNotes: any[];
  notesData: any;
  editorContent:any;
  title:string;
  constructor( private edit:EditorService) { 
    // this.id = this.view.getMessage().subscribe(noteId => { noteId = noteId; });
    // console.log("this.id",this.id);
    
    
    

}
// @Input() notesData:any;

  ngOnInit() {
this.method();
console.log("title",this.title);
    // this.quest.get().subscribe(
    //     (res) => {
    //       this.notesData=res;
    //       console.log("i0",this.notesData);
          // console.log("notess",this.notesData);
          
  //       })
  // this.method();
  // this.getAllNotes();
  
  

  }
  method(){
    this.edit.getsearch().subscribe(
      (res)=>{
        this.notesData=res;
        console.log("notesdata",this.notesData);
        // this.title=this.notesData.title;
      
        
      }
    )
  }
  // getAllNotes() {
  //   console.log("getAllNote");

  //   this.note.getNotes().subscribe(

  //     (response: any) => {
  //     this.addNotes=response;
  // console.log("this.adddNotes",this.addNotes);
    
  //     })
  //   }
  
  // method()
  // {
  //   // this.inter1=;
  //   console.log("inter1",this.check);

  //   // this.view.getMessage().subscribe(
  //   //   (res) => {
  //   //     this.noteId= res;
  //   //     console.log("noteid222ddd",this.noteId);
  //   // this.check=this.noteId
  //   // console.log("errerer",this.check.noteId);
  //   // this.inter=this.check.noteId
  //   // this.inter1=1111;
  // //   console.log("11",this.inter1);
  // //  console.log("check",this.check);
   
  //   // this.update.changeMessage(noteId);
  //   // console.log("frew0", this.noteId);
  // // })
  // }
  // this.check=this.id;
  // }
// submit(editorContent){
// console.log("data",editorContent);

//   }
submit(){
  console.log("hiii",this.notesData.title);
  
}

}

