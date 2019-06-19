import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from '../../core/service/http/http-service.service'
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss']
})
export class QuestionAnswerComponent implements OnInit {

  noteId:any;
  notesData: any;
  notes: any;
  editorContent:any;
  constructor( private route:ActivatedRoute,private http:HttpServiceService,private snackbar:MatSnackBar) { 

}
// @Input() notesData:any;

  ngOnInit() {
    this.noteId = this.route.snapshot.params['id'];
console.log("idd",this.noteId);

this.http.noteData('notes/getNotesDetail/'+this.noteId).subscribe(
  (res)=>{
    this.notesData=res;
    this.notes=this.notesData.data.data;
    console.log("notesData",this.notes);
    
    this.snackbar.open("notes get sucessfully","",{duration:2000})
  },
  (error)=>{
    this.snackbar.open("error occur","",{duration:2000})
    
  })
}

  
 
submit(){
  console.log("hiii",this.editorContent);

  
}

}

