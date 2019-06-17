import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpServiceService } from '../../core/service/http/http-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material';
import { UpdateServiceService } from '../../core/service/update/update-service.service';
import { NoteServiceService } from '../../core/service/note/note-service.service';
import {CollaboratorComponent} from '../../component/collaborator/collaborator.component';
import {ViewService} from '../../core/service/viewService/view.service';
import {QuetionAnsService} from '../../core/service/questionAns/quetion-ans.service'
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  color: string;
  addNote: any;
  addNoteLabels: any[];
  message: any;
  constructor(private http: HttpServiceService,private view:ViewService,private quest:QuetionAnsService,private update: UpdateServiceService,private dialog:MatDialog, private snackbar: MatSnackBar, private noteService: NoteServiceService) {

  }
  ngOnInit() {
    // this.getLabels();
    // this.update.currentMessage.subscribe(

    //   (response:any)=>{
    //     console.log(response);
    //     this.message=response;
    //     this.getLabels();
        
    //   }
    // )

  }
  @Input() noteId: any;
  @Input() notesData:any;
  @Output() countChange = new EventEmitter();
  @Output() archiveNote = new EventEmitter();
  @Output() remindChange = new EventEmitter();
  
  changeColor(color) {

    console.log("color", color);
    this.countChange.emit(color);


    // console.log("color",color);

  }


    colorCodes = [
      [
        { name: "white",hexcode: "#ffffff" },
        { name: "lightGreen",hexcode: "#90ee90" },
        { name: "purple", hexcode: "#800080" },
        { name: "red", hexcode: "#ff0000" },
      ],
      [
        { name: "Teal", hexcode: "#008080" },
        { name: "pink", hexcode: "#ffc0cb" },
        { name: "orange", hexcode: "#ffa500" },
        { name: "blue", hexcode: "#0000ff" },
      ],
      [
        { name: "brown", hexcode: "#a52a2a" },
        { name: "yellow", hexcode: "#ffff00" },
        { name: "darkBlue", hexcode: "#00008b" },
        { name: "gray", hexcode: "#808080" }
      ]
    ]
  archieveNote(archive) {

    this.archiveNote.emit(archive);
    console.log("archieve", archive);


  }
  deleteNote(noteId) {
    console.log("ggggg");

    var data = {
      "noteIdList": [noteId],
      "isDeleted": true,
    }
    this.http.postDelete('notes/trashNotes', data).subscribe(
      (response) => {
        this.update.changeMessage('');
        this.snackbar.open('Note deleted sucessfully')
      },
      (error) => {
        console.log('error occur when deleting the  note');
      })
  }
  addLabelToNote(noteId, lableId) {


    this.http.postLabel('notes/' + noteId + '/addLabelToNotes/' + lableId + '/add', {}).subscribe(
      (response: any) => {
        console.log(response);
        this.addNote = response.data
        this.update.changeMessage('rewq');
        console.log("swrwer", this.addNote);
        this.getLabels();
        this.snackbar.open('label added to note successfully', 'End now', { duration: 1000 });
      },
      (error) => {
        console.log(error);
        this.snackbar.open('label not added', 'End now', { duration: 1000 });


      }
    )

  }

  morevert(){
    this.getLabels();
    }

  getLabels() {
    this.noteService.showNoteLabel().subscribe(
      (response: any) => {
        console.log("get Labels==>", response);
        this.addNoteLabels = response.data.details;
        console.log("this.addNoteLabels", this.addNoteLabels);

      },
      (error) => {
        console.log(error);

      }
    )
  }

  setTodayReminder() {
    var date = new Date().toDateString();
    var reminder1 = date + ", 8:00 "
    this.remindChange.emit(reminder1);
    console.log("in reminder1==>", reminder1);
  }
  setTomorrowReminder = () => {
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"]
    var date = new Date().toDateString();
    var rewhr = new Date().getDate() + 1;
    date = date.replace(new Date().getDate().toString(), rewhr.toString());
    //console.log("srfas",date);

    date = date.replace(days[new Date().getDay() - 1], days[new Date().getDay()]);
    var reminder1 = date + ", 8:00 ";
    this.remindChange.emit(reminder1);
    console.log("tommorow reminder==>", reminder1);
  }
  setWeeklyReminder = () => {
    var date = new Date().toDateString();
    var Adate = date.replace(new Date().getDate().toString(), (new Date().getDate() + 7).toString());
    var reminder1 = Adate + ", 8:00";
    this.remindChange.emit(reminder1);
    console.log("weekly reminder==>", reminder1);


  }

openDialog(notesData:any) {
  console.log(this.notesData.id);
  
  const dialogRef = this.dialog.open(CollaboratorComponent,{
    data:{      
            id:notesData.id,
            collaborators:notesData.collaborators,
         
    }

  });

    dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
question(notesData:any){
  this.quest.noteId(notesData);
  console.log("aaa",notesData);
  

}
}











































































