import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../core/service/http/http-service.service'
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { environment } from '../../../environments/environment';
// import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss']
})

export class QuestionAnswerComponent implements OnInit {

  noteId: any;
  notesData: any;
  notes: any;
  editorContent: any;
  newContent: any;
  value: any
  profilpic: any;
  img: any;
  value1:boolean=true;
  editorContent1: any;
  questionId: any;

  // content = "<a href='#' id='cafeteria' class='cafeteria'>Cafeteria</a>";
  constructor(private route: ActivatedRoute, private http: HttpServiceService, private snackbar: MatSnackBar) { }
  // first = localStorage.getItem('firstName');
  // last = localStorage.getItem('lastName');
  // profilImaage = localStorage.getItem('profilPic');

  // alert('gii')

  // transform(value) {
  //   return this.sanitized.bypassSecurityTrustHtml(value);
  // }
  // @Input() notesData:any;

  ngOnInit() {
    this.noteId = this.route.snapshot.params['id'];
    console.log("idd", this.noteId);
    this.method();

    // localStorage.getItem('profilePic');
  }

  method() {
    this.http.noteData('notes/getNotesDetail/' + this.noteId).subscribe(
      (res) => {
        this.notesData = res;
        this.notes = this.notesData.data.data;
        console.log("id", this.notes[0].questionAndAnswerNotes[0].id);
        this.questionId= this.notes[0].questionAndAnswerNotes[0].id
        console.log("response", this.notes);
        this.value = this.notes[0].questionAndAnswerNotes[0].message
        console.log("image url", this.notes[0].questionAndAnswerNotes[0].user.imageUrl);
        this.profilpic = this.notes[0].questionAndAnswerNotes[0].user.imageUrl
        this.img = environment.url + this.profilpic;
        console.log("profil", this.img);

        this.snackbar.open("notes get sucessfully", "", { duration: 2000 })
      },
      (error) => {
        this.snackbar.open("error occur", "", { duration: 2000 })

      })
  }


  question() {

    var data = {
      "message": this.editorContent,
      "notesId": this.noteId
    }
    console.log("question body====>", data);
    if (this.editorContent == null) {
      this.snackbar.open(
        "Froala editor is empty & click on submit button", "", { duration: 2000 })

    }
    else {
      this.http.addQuestion('/questionAndAnswerNotes/addQuestionAndAnswer', data)
        .subscribe(

          (response: any) => {
            this.method();
            // this.showLabel();
            console.log("question added sucessfully", response);
            // this.dataService.changeMessage('')

            this.snackbar.open(
              "question add sucessfully", "",
              { duration: 2500 }

            )
            this.editorContent=""
          },
          error => {
            this.snackbar.open(
              "error occur", "",
              { duration: 2500 }
            )
          }

        )
    }
  }
reply()
{
  
 var data ={
  "message":this.editorContent1,
    // "parentId":id
  }


this.http.addQuestion('/questionAndAnswerNotes/reply/'+this.questionId,data).subscribe(
  (res)=>{
    // this.answer=
    this.snackbar.open("answer added suceessfully","",{duration:2000});
console.log("reply",res);

  },
  (error)=>{
    this.snackbar.open("error occur","",{duration:2000});
  }

)
}
openEditor(){
this.value1=false;
}
}


