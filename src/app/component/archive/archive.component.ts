import { Component, OnInit } from '@angular/core';
import { UpdateServiceService } from 'src/app/core/service/update/update-service.service';
import { MatSnackBar } from '@angular/material';
import { Notes } from '../../core/model/Notes/notes';
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
