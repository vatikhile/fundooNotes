import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../core/service/http/http-service.service'
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
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
  // content = "<a href='#' id='cafeteria' class='cafeteria'>Cafeteria</a>";
  constructor(private route: ActivatedRoute, private http: HttpServiceService, private snackbar: MatSnackBar) {

  }
  // transform(value) {
  //   return this.sanitized.bypassSecurityTrustHtml(value);
  // }
  // @Input() notesData:any;

  ngOnInit() {
    this.noteId = this.route.snapshot.params['id'];
    console.log("idd", this.noteId);
    this.method();
  }

  method() {
    this.http.noteData('notes/getNotesDetail/' + this.noteId).subscribe(
      (res) => {
        this.notesData = res;
        this.notes = this.notesData.data.data;
        console.log("id", this.notes[0].questionAndAnswerNotes[0].id  );
        console.log("response", this.notes);

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

    this.http.addQuestion('/questionAndAnswerNotes/addQuestionAndAnswer', data)
      .subscribe(

        (response: any) => {
          // this.showLabel();
          console.log("question added sucessfully", response);
          // this.dataService.changeMessage('')

          this.snackbar.open(
            "question add sucessfully", "",
            { duration: 2500 }

          )
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


