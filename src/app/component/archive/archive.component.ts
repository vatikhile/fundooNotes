import { Component, OnInit } from '@angular/core';
import { UpdateServiceService } from 'src/app/core/service/update/update-service.service';
import { MatSnackBar } from '@angular/material';
import { Notes } from '../../core/model/Notes/notes';

import { analyzeAndValidateNgModules } from '@angular/compiler';
import {Label} from '../../core/model/label/label';
import {NoteServiceService} from '../../core/service/note/note-service.service'
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  userNote: any;
  // listView: boolean;
  color: string;
  colorCode: string[][] =
    [['white', 'lightGreen', 'purple', 'red'],
    ['orange', 'teal', 'pink', 'darkBlue'], ['blue', 'brown', 'yellow', 'gray']]
    ;
    labels = new Label();
  messageSource: string;
  constructor( private update:UpdateServiceService,private snackbar:MatSnackBar,private noteService:NoteServiceService) {
    update.currentMessage.subscribe(
      status => { this.messageSource = status }
    )
    this.update.currentMessage.subscribe(data => { this.userNote = data })
  }
   

  ngOnInit() {
  }

}


/////////////////////////////////////////////////////////////////

// import { Component, OnInit } from '@angular/core';
// import { HttpService } from 'src/app/service/httpservice.service';
// import { LabelDto } from 'src/app/model/LabelDto.model';
// import { PresentSidenavViewService } from 'src/app/service/present-sidenav-view.service';
// import { ArchiveService } from 'src/app/service/archive.service';
// import { MatSnackBar, MatDialog, MatDialogConfig } from '@angular/material';
// import { analyzeAndValidateNgModules } from '@angular/compiler';
// import { CollaboratorComponent } from '../collaborator/collaborator.component';

// @Component({
//   selector: 'app-get-archive',
//   templateUrl: './get-archive.component.html',
//   styleUrls: ['./get-archive.component.scss']
// })
// export class GetArchiveComponent implements OnInit {
//   userNote: any;
//   listView: boolean;
//   color: string;
//   colorCode: string[][] =
//     [['white', 'lightGreen', 'purple', 'red'],
//     ['orange', 'teal', 'pink', 'darkBlue'], ['blue', 'brown', 'yellow', 'gray']]
//     ;
//   labels = new LabelDto();
//   constructor(private http: HttpService,
//     private dialog: MatDialog,
//     private listStatus: PresentSidenavViewService,
//     private archiveNote: ArchiveService,
//     private snackbar: MatSnackBar) {
//     listStatus.updatedListStatus.subscribe(
//       status => { this.listView = status }
//     )
//     this.archiveNote.updatedNote.subscribe(data => { this.userNote = data })
//   }

//   ngOnInit() {

//   }
//   changeColor(note: any, color: string) {
//     console.log("note--->" + note)
//     this.color = color;
//     note.color = color;
//     this.http.putNote('/note/update' + '?noteId=' + note.noteId, note).subscribe(data => {
//       this.snackbar.open(data.responseMessage, 'Undo',
//         { duration: 1000 })
//     });
//     setTimeout(() => { this.archiveNote.updateNote() }, 300)
//   }
//   onClose(note: any) {
//     this.http.putNote('/note/update' + '?noteId=' + note.noteId, note).subscribe(data => {
//       this.snackbar.open(data.responseMessage, 'Undo',
//         { duration: 1000 })
//     });
//     setTimeout(() => { this.archiveNote.updateNote() }, 300)
//   }
//   onPin(note: any) {
//     console.log('pin')
//     this.http.putNote('/note/pinnote' + '?noteId=' + note.noteId, note.noteId)
//       .subscribe(data => {
//         this.snackbar.open(data.responseMessage, 'Undo',
//           { duration: 1000 })
//       });
//     this.dialog.closeAll();
//     setTimeout(() => { this.archiveNote.updateNote() }, 1000)
//   }
//   onArchive(note: any) {
//     this.http.putNote('/note/archivenote' + '?noteId=' + note.noteId, note.noteId)
//       .subscribe(data => {
//         this.snackbar.open(data.responseMessage, 'Undo',
//           { duration: 1000 })
//         this.dialog.closeAll();
//         setTimeout(() => { this.archiveNote.updateNote() }, 1000)

//       });

//   }
//   onBin(note: any) {
//     this.http.putNote('/note/trash' + '?noteId=' + note.noteId, note.noteId).subscribe(data => {
//       this.snackbar.open(data.responseMessage, 'Undo',
//         { duration: 1000 })
//     });
//     this.dialog.closeAll();
//     setTimeout(() => { this.archiveNote.updateNote() }, 1000)

//   }
//   addLabel(note: any, label: any) {
//     console.log(label)
//     this.http.postRequestp('/label/addlabeltonote?labelTitle=' + label.labelTitle + '&noteId=' + note.noteId, label)
//       .subscribe(response => this.snackbar.open(response.responseMessage, 'undo', { duration: 1000 }));

//     setTimeout(() => { this.archiveNote.updateNote() }, 1000)
//   }
//   deleteLabelFromNote(note: any, labelId: any) {
//     this.http.deleteRequest('/label/deletenotelabel?labelId=' + labelId + "&noteId=" + note.noteId)
//       .subscribe(data => { this.snackbar.open(data.responseMessage, 'undo', { duration: 1000 }) });
//     this.dialog.closeAll();
//     setTimeout(() => { this.archiveNote.updateNote() }, 1000)
//   }

//   addRemainder(note: any, event) {
//     let date: Date = new Date(event.value);

//     console.log(event.value);
//     // this.selectedDateTime = event.value;
//     // console.log(this.selectedDateTime)  ;
//     note.remainder = date;
//     console.log('iso-->' + date.toISOString())

//     this.http.putData('/note/addremainder?noteId=' + note.noteId + "&remainder=" + date.toISOString(), date).subscribe(
//       response => {
//         this.snackbar.open(response.responseMessage, 'undo', { duration: 1000 })
//         console.log(response)
//       }
//     )

//     this.dialog.closeAll();
//     setTimeout(() => { this.archiveNote.updateNote() }, 1000)
//   }

//   removeCollaborator(note: any, collaborator: any) {
//     this.http.deleteRequest
//       ('/note/deletecollaborator?emailId=' + collaborator.emailId + '&noteId=' + note.noteId)
//       .subscribe(response => {
//         this.snackbar.open(response.responseMessage, 'undo', { duration: 1000 })
//       });
//     setTimeout(() => { this.archiveNote.updateNote() }, 1000)
//     this.dialog.closeAll();
//   }

//   removeRemainder(note: any) {
//     this.http.deleteRequest('/note/removeremainder?noteId=' + note.noteId)
//       .subscribe(response => {
//         this.snackbar.open(response.responseMessage, 'undo', { duration: 1000 })
//       }
//       )
//     this.dialog.closeAll();
//     setTimeout(() => { this.archiveNote.updateNote() }, 300)
//   }
//   openCollabDialog(note) {
//     console.log("hii")
//     const dialogConfig = new MatDialogConfig();
//     dialogConfig.data = {
//       note: note
//     }
//     dialogConfig.panelClass = 'dialog-container-width'
//     dialogConfig.autoFocus = true;
//     this.dialog.open(CollaboratorComponent, dialogConfig);
//   }


// }