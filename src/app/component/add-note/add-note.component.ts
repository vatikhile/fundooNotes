import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  private flag:Boolean=false;
  constructor() { }

  ngOnInit() {
  }
  show(){
    this.flag =! this.flag;
  }
}
