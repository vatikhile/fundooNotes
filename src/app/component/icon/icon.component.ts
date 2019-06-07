import { Component, OnInit, Inject, Output, EventEmitter, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import {HttpServiceService} from '../../core/service/http/http-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UpdateServiceService } from '../../core/service/update/update-service.service'

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  // colorCode: string[][]= 
  // [['white','lightGreen','purple','red'],
  // ['orange','teal','pink','darkBlue'],['blue','brown','yellow','gray']];
  color: string;
  addNote: any;
  addNoteLabels: any[];
  message: any;
  constructor(private http:HttpServiceService,private update:UpdateServiceService,private snackbar:MatSnackBar) {
    // @Inject(MAT_DIALOG_DATA) private data:{ notes: any}) {
    // this.http.getRequest('/label/getlabel').subscribe(data => this.userLabel = data );
  }
  //   notes=this.data.notes;
  ngOnInit() {
    // console.log("color");
this.getLabels();
this.update.currentMessage.subscribe(

  (response:any)=>{
    console.log(response);
    this.message=response;
    this.getLabels();
    
  }
)

  }
  @Input()  noteId:any;
  @Output() countChange = new EventEmitter();
  @Output() archiveNote = new EventEmitter();
  changeColor(color) {
    // this.color=color;
    // this.notes.color= color;
    console.log("color", color);
    this.countChange.emit(color);

    
    // console.log("color",color);

  }
  colorCodes =
    [
      [
        { name: "white", hexcode: "#ffffff" },
        { name: "lightGreen", hexcode: "#f28b82" },
        { name: "purple", hexcode: "#f7bc04" },
        { name: "red", hexcode: "#faf474" },
      ],
      [
        { name: "Teal", hexcode: "#cbff90" },
        { name: "pink", hexcode: "#a7ffeb" },
        { name: "orange", hexcode: "#cbf0f8" },
        { name: "blue", hexcode: "#adcbfa" },
      ],
      [
        { name: "brown", hexcode: "#d7aefb" },
        { name: "yellow", hexcode: "#fdcfe8" },
        { name: "darkBlue", hexcode: "#cbb294" },
        { name: "gray", hexcode: "#e8eaed" }
      ]
    ]

  archieveNote(archive) {
   
    this.archiveNote.emit(archive);
    console.log("archieve", archive);
  

  }
  deleteNote(noteId)
  {
    console.log("ggggg");
    
    var data={
      "noteIdList":[noteId],
      "isDeleted":true,
}
this.http.postDelete('notes/trashNotes',data).subscribe(
  (response)=>{
    this.update.changeMessage('');
    this.snackbar.open('Note deleted sucessfully')
 },
 (error)=>{
console.log('error occur when deleting the  note');
 })
  }
  addLabelToNote(noteId,lableId){
  

    this.http.postLabel('notes/'+noteId+'/addLabelToNotes/'+lableId+'/add',{}).subscribe(
      (response:any)=>{
        console.log(response);
                  this.addNote=response.data
                  this.update.changeMessage('rewq');
                  console.log("swrwer",this.addNote);
                this.snackbar.open('label added to note successfully', 'End now', {duration: 1000});
      },
      (error)=>{
        console.log(error);
        this.snackbar.open('label not added', 'End now', {duration: 1000});
  
        
      }
    )
    
  }
  getLabels(){
    this.http.getLabel('noteLabels/getNoteLabelList').subscribe(
      (response:any)=>{
        console.log("get Labels==>",response);
        this.addNoteLabels=response.data.details;
       
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }
}
