import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Notes } from '../../core/model/Notes/notes';
import { NoteServiceService } from '../../core/service/note/note-service.service'
import { UpdateServiceService } from 'src/app/core/service/update/update-service.service';
import {ViewService} from '../../core/service/viewService/view.service'

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  private flag: Boolean = false;

  addNote: Notes = new Notes();
  setColor: any;
  constructor(private noteservice: NoteServiceService,private view:ViewService, private dataService: UpdateServiceService, private snackbar: MatSnackBar) { }
  ngOnInit() {
  }
  /*****
   @purpose:Add the new note in database after click on close button
   ******/
  addNotes() {
    console.log("wewqeg", this.addNote);
    this.show();
    console.log(this.addNote.title);
    if(this.setColor==undefined){
      this.addNote.color=""
    }
        else{
          this.addNote.color=this.setColor
        }

    this.noteservice.addNote(this.addNote).subscribe(
      (response: any) => {
        this.view.getNotes();
        console.log(response);
        // this.dataService.currentMessage;
        this.dataService.changeMessage('444')
        this.snackbar.open(
          "Note is created Successfully", "",
          { duration: 2500 }
        )

      }

    )

    this.addNote.title = null;
    this.addNote.description = null;
  }

  /*****
   @purpose:After click on small matcard it toggle the value of flag
   ******/
  show() {
    this.flag = !this.flag;
  }
  receiveColorEvent($event){
    this.setColor= $event;    
  }
}








//////////////////////////
// addnotes//
// <div fxLayout="column" fxLayoutAlign="space-between">
// <div fxLayoutAlign="center center" fxFlex="200">

// <div (click)="showNotes()">
// <mat-card class="addCard" *ngIf="flag==false" >
// <input class="input" mat-input placeholder="Take a note..." >
// <img src="../../../assets/images/cardImage.svg">
// </mat-card>
// </div>
// <div>
// <mat-card [style.backgroundColor]="setColor" class="addCard" *ngIf="flag==true" >
// <div>
// <input class="input" [style.backgroundColor]="setColor" mat-input placeholder="Title" [(ngModel)]="addNote.title" [formControl]="title">
// <button mat-icon-button >
// <img src="../../../assets/images/pin.svg" >
// <!-- <img src="../../../assets/images/unpin.svg" *ngIf="flag==true"> -->
// </button>

// </div> 
// <div>
// <input class="input" [style.backgroundColor]="setColor" mat-input placeholder="Take a note.." [(ngModel)]="addNote.description" [formControl]="description">
// </div> 
// <div fxLayout="row" fxLayoutAlign="space-between">
// <app-icon class="appicon" (countChange)="receiveColorEvent($event)"
// (remindChange)="receiveReminderEvent($event)"
// ></app-icon>
// <button mat-button (click)="createNote()">close</button>
// </div>
// </mat-card>
// </div>
// </div>
// <div>
// <app-getnote></app-getnote>
// </div>
// </div>



// import { Component, OnInit } from '@angular/core';
// import { Note } from '../../models/note.models';
// import { Router } from '@angular/router';
// import { MatSnackBar } from '@angular/material';
// import { NoteService } from 'src/app/services/noteService/note.service';
// import { FormControl, Validators } from '@angular/forms';
// import { DataService } from 'src/app/services/dataService/data.service';

// @Component({
// selector: 'app-addnotes',
// templateUrl: './addnotes.component.html',
// styleUrls: ['./addnotes.component.scss']
// })
// export class AddnotesComponent implements OnInit {
// addNote: Note=new Note();
// color:any
// title=new FormControl('',Validators.required);
// description=new FormControl('',Validators.required);
// setColor: any;
// changeNote: any;
// // setReminder: any;
// setTodayReminder: any;
// setTomorrowReminder: any;
// setWeeklyReminder: any;
// setReminder: any;
// constructor(private noteService: NoteService,private dataService:DataService, private router: Router,private snackbar : MatSnackBar) { }
// flag=false;
// ngOnInit() {
// }

// showNotes(){
// this.flag=!this.flag
// }
// receiveColorEvent($event){
// this.setColor= $event; 
// }
// receiveReminderEvent($event){
// this.setReminder=$event
// }
// createNote(){
// this.flag=false;
// console.log('console',this.addNote); 
// console.log("get color" ,this.setColor);
// if(this.setColor==undefined){
// this.addNote.color=""
// }
// else{
// this.addNote.color=this.setColor
// }


// if(this.setReminder==undefined){
// this.addNote.reminder=""
// }
// else{
// this.addNote.reminder=this.setReminder
// }


// if(this.addNote.title==undefined){
// this.addNote.title=""
// }

// else{
// this.addNote.title=this.addNote.title
// }
// if(this.addNote.description==undefined){
// this.addNote.description=""
// }

// else{
// this.addNote.description=this.addNote.description
// }
// // console.log("this value",this.title.value);
// if( this.addNote.title != ""){
// this.noteService.post('notes/addNotes',this.addNote).subscribe(
// data => {
// console.log("Response",data);
// this.dataService.changeMessage('rewq');
// this.snackbar.open('note added Successful', 'End now', {duration: 1000});
// },
// error=> {
// this.snackbar.open(










// allnotes 

// <div class="mainCard" fxLayout="row wrap" fxLayoutAlign="space-evenly center" >
// <div *ngFor="let items of addNote" fxLayoutGap="2px">
// <div *ngIf="items.isArchived===false && items.isDeleted===false">
// <mat-card class="smallcard" [ngStyle]="{ 'background-color': items.color }" >
// <div fxLayout="column" fxLayoutAlign="space-around start" fxLayoutGap="10px">
// <div (click)="openDialog(items)">{{items.title}}</div>
// <div fxLayout="column" fxLayoutAlign="space-around start" fxLayoutGap="10px">
// <div (click)="openDialog(items)">{{items.description}}</div>
// </div>
// <div *ngIf="items.collaborators.length > 0" fxLayoutGap="10px">
// <button mat-mini-fab color="warn" (click)="openCollabDialog(items)">{{items.collaborators[0].firstName |slice:0:1}}</button>
// <button *ngIf="items.collaborators.length>1" mat-mini-fab color="warn" (click)="openCollabDialog(items)">{{items.collaborators[1].firstName |slice:0:1}}</button>
// <button *ngIf="items.collaborators.length>2" mat-mini-fab color="warn" (click)="openCollabDialog(items)">{{items.collaborators[2].firstName |slice:0:1}}</button>
// </div>

// <div *ngIf="items.reminder.length > 0">
// <mat-chip-list >
// <mat-chip> <img src="../../../assets/images/clock.svg"> {{items.reminder | date:'MMM d, y, h:mm a'}}</mat-chip>
// </mat-chip-list>
// </div>
// <div>
// <app-label-display [noteId]="items.id" [noteData]="items.noteLabels"></app-label-display>
// </div>
// </div>
// <div>
// <app-icon
// [notesData]="items"
// [noteId]="items.id"
// (countChange)="updateColor(items,$event)" 
// (remindChange)="updateReminder(items,$event)"
// (archiveNote)="archiveNote1(items,$event)"
// class="appicon"></app-icon>
// </div>
// </mat-card>
// </div>
// </div>
// </div>
// import { Component, OnInit, Input } from '@angular/core';
// import { Router } from '@angular/router';
// import { MatSnackBar } from '@angular/material';
// import { NoteService } from 'src/app/services/noteService/note.service';
// import { DataService } from 'src/app/services/dataService/data.service';
// import {MatDialog} from '@angular/material';
// import { DialogComponent } from '../dialog/dialog.component';
// import { NoteLabel } from '../../models/noteLabel.models';
// import { CollaboratorComponent } from '../collaborator/collaborator.component';
// @Component({
// selector: 'app-getnote',
// templateUrl: './getnote.component.html',
// styleUrls: ['./getnote.component.scss']
// })
// export class GetnoteComponent implements OnInit {
// addNote: any[];
// message: any;
// setColor: any;
// noteId: any;
// sfsf: any;
// setReminder: any;
// countId: any;
// number: any;
// getLabel: any;
// lableId: any;
// labeldata: any;
// lableName: any;
// archive: any;
// addNote2: any;
// // get: any
// constructor(private noteService: NoteService,public dialog: MatDialog, private dataService:DataService, private router: Router,private snackbar : MatSnackBar) { }
// removable = true;

// ngOnInit() { 
// this.getAllNote();
// //this.updateColor
// this.dataService.currentMessage.subscribe(
// response=>{
// this.message=response;
// this.getAllNote();
// })
// }
// @Input() notesData:any

// getCount(){
// this.number=this.countId
// }




// /** Update Note Color*/
// updateColor(items,$event){
// this.setColor=$event
// console.log("get color" ,this.setColor);
// var noteData={
// "color":this.setColor,
// "noteIdList":[items.id]
// }
// console.log("jdfdhfhd",noteData);
// this.noteService.postData('notes/changesColorNotes',noteData).subscribe(
// (response:any)=>{
// console.log(response);
// this.addNote=response.data;
// console.log("data1==>",this.addNote);
// this.dataService.changeMessage('rewq'); 
// this.snackbar.open('note color updated Successfully..', 'End now', {duration: 1000}); 
// },
// error=>{
// console.log(error);
// this.snackbar.open('note color not updated', 'End now', {duration: 1000}); 
// }
// )
// }










// /** Update Note Reminder*/
// updateReminder(items,$event){
// this.setReminder=$event



// iconn//
// <div fxLayout="row" fxLayoutAlign="space-between">
// <button mat-icon-button [matMenuTriggerFor]="reminder">
// <img matTooltip="Reminder" class="img1" src="../../../assets/images/remindcard.svg">
// </button>
// <mat-menu #reminder="matMenu" [overlapTrigger]="false">
// <ng-template matMenuContent>
// <div fxLayout="column" fxLayoutAlign="space-between">
// Reminder:
// <div>
// <button mat-button (click)="setTodayReminder()">
// Later Today 8:00
// </button>
// </div>
// <div>
// <button mat-button (click)="setTomorrowReminder()">
// Tommorrow 8:00
// </button>
// </div>
// <div>
// <button mat-button (click)="setWeeklyReminder()">
// Next Week 8:00
// </button>
// </div>
// </div>
// </ng-template>
// </mat-menu>

// <button mat-icon-button (click)="openDialog(notesData)">
// <img matTooltip="collaborator" class="img1" src="../../../assets/images/collabcard.svg">
// </button>

// <button mat-icon-button matTooltip="Change color" [matMenuTriggerFor]="colorlist">
// <img src="../../../assets/images/colorcard.svg">
// </button>

// <mat-menu #colorlist="matMenu" [overlapTrigger]="false">
// <ng-template matMenuContent>
// <div>
// <div fxLayout="row" fxLayoutGap="10px" style="margin-top: 3px" *ngFor="let colors of arrayOfColors">
// <div *ngFor="let color of colors">
// <button [ngStyle]="{ 'background-color': color.hexcode }" class="iconsize"
// (click)="setColor(color.hexcode)" matTooltip="{{ color.name }}" mat-mini-fab></button>
// </div>
// </div>
// </div>
// </ng-template>
// </mat-menu>
// <button mat-icon-button>
// <img matTooltip="Image" class="img1" src="../../../assets/images/cardImage.svg">
// </button>
// <button mat-icon-button (click)="archiveNotes()">
// <img matTooltip="archive" class="img1" src="../../../assets/images/archive.svg">
// </button>
// <button mat-icon-button [matMenuTriggerFor]="morelist">
// <mat-icon>more_vert</mat-icon>
// </button>



// <mat-menu #morelist="matMenu">
// <button mat-menu-item [matMenuTriggerFor]="label">Add Label</button>
// <button mat-button (click)="deleteNote(noteId)">Delete Note</button>
// </mat-menu>

// <mat-menu #label="matMenu">
// Label Note
// <div *ngFor="let items of addNoteLabels">
// <
// import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
// import { NoteLabelService } from 'src/app/services/noteLabelService/note-label.service';
// import { DataService } from 'src/app/services/dataService/data.service';
// import { MatDialog, MatSnackBar } from '@angular/material';
// import { CollaboratorComponent } from '../collaborator/collaborator.component';
// import { NoteService } from 'src/app/services/noteService/note.service';

// @Component({
// selector: 'app-icon',
// templateUrl: './icon.component.html',
// styleUrls: ['./icon.component.scss']
// })
// export class IconComponent implements OnInit {
// addNoteLabels: any[];
// message: any;
// lableId: string;
// addNote: any;

// constructor(private noteLabelService:NoteLabelService,private snackbar : MatSnackBar,private noteService: NoteService,public dialog: MatDialog,private dataService:DataService) { }

// ngOnInit() {
// this.getLabels();
// this.dataService.currentMessage.subscribe(

// (response:any)=>{
// console.log(response);
// this.message=response;
// this.getLabels();
// }
// )
// }
// @Input() noteId:any;
// @Input() notesData:any;
// @Output() countChange = new EventEmitter();
// @Output() remindChange = new EventEmitter();
// @Output() deletNote=new EventEmitter();
// @Output() labelNote=new EventEmitter();
// @Output() archiveNote=new EventEmitter();
// // @Output() remind1Change = new EventEmitter();
// // @Output() remind2Change = new EventEmitter();
// //noteId=this.notesData.id
// arrayOfColors = [
// [
// { name: "white",hexcode: "#ffffff" },
// { name: "lightGreen",hexcode: "#90ee90" },
// { name: "purple", hexcode: "#800080" },
// { name: "red", hexcode: "#ff0000" },
// ],
// [
// { name: "Teal", hexcode: "#008080" },
// { name: "pink", hexcode: "#ffc0cb" },
// { name: "orange", hexcode: "#ffa500" },
// { name: "blue", hexcode: "#0000ff" },
// ],
// [
// { name: "brown", hexcode: "#a52a2a" },
// { name: "yellow", hexcode: "#ffff00" },
// { name: "darkBlue", hexcode: "#00008b" },
// { name: "gray", hexcode: "#808080" }
// ]
// ]

// setColor(color) {
// this.countChange.emit(color);
// }


// labelNotes(items){
// this.labelNote.emit(items);
// }

// archiveNotes(archive){
// this.archiveNote.emit(archive);