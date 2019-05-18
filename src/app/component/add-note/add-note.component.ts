import { Component, OnInit } from '@angular/core';
import { MatTooltipModule, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { NotesService } from "../../core/model/Notes/notes.service";

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  private flag:Boolean=false;
 
  constructor(private noteServie: NotesService, private mattooltip: MatTooltipModule, private router: Router, private formBuilder: FormBuilder, private snackbar: MatSnackBar) { }

 
  colors: String = "white";
  title: any = "";
  description: any = "";

  note: NotesService = new NotesService();


 

  close() {
    console.log("onClose():: executed");
    console.log(this.note.title);
    this.noteServie.postRequest("createNote", this.note).subscribe(
      (respose: any) => {
        if (respose.statusCode === 100) {
          console.log(respose);
          this.snackbar.open(
            "Note is created Successfully",
            "undo",
            { duration: 2500 }
          )
        }
        else {
          console.log(respose);

          this.snackbar.open(
            "Note creation Failed",
            "undo",
            { duration: 2500 }
          )
        }

      }

    )
   

  }






 
  ngOnInit() {
  }
  show(){
    this.flag =! this.flag;
  }


  onClose() {
    console.log("onClose():: executed");
    console.log(this.note.title);
    this.noteServie.postRequest("createNote", this.note).subscribe(
      (respose: any) => {
        if (respose.statusCode === 100) {
          console.log(respose);
          this.snackbar.open(
            "Note is created Successfully",
            "undo",
            { duration: 2500 }
          )
        }
        else {
          console.log(respose);

          this.snackbar.open(
            "Note creation Failed",
            "undo",
            { duration: 2500 }
          )
        }

      }

    )
    }
}
