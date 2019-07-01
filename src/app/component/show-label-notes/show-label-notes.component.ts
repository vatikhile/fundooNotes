import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {HttpServiceService} from '../../core/service/http/http-service.service';
// import {LabelsService} from '../../core/service/labelService/labels.service';
import { UpdateServiceService } from '../../core/service/update/update-service.service';

@Component({
  selector: 'app-show-label-notes',
  templateUrl: './show-label-notes.component.html',
  styleUrls: ['./show-label-notes.component.scss']
})
export class ShowLabelNotesComponent implements OnInit {
labelMain=[];
  label: string;
  card = [];
  constructor(private router: Router, private activeRouter: ActivatedRoute,private http:HttpServiceService) { }
  @Output() countChange = new EventEmitter(); 
  ngOnInit() {
    try {
      this.getAllLabel();
      this.activeRouter.params.subscribe(data => {
        console.log("label",this.label);
        this.label = data.label;
        this.getNoteListByName(data.label);

      })
    } catch (error) {
      console.log('error ');

    }


  }
  getAllLabel() {
    try {
      this.http.getLabel('noteLabels/getNoteLabelList').subscribe(data => {
        this.labelMain = data['data']['details'];
        console.log('get all label', this.labelMain);


      }, err => {
        console.log('error in get all label ', err);
      })
    } catch (error) {
      console.log('error in getAllLabel in select label component');

    }

  }
  getNoteListByName(label) {
  
    try {
      this.http.postLabel('notes/getNotesListByLabel/' +label,{}).subscribe(data => {
        
        console.log('data after get note of label',this.card);
        this.card = data['data']['data'];
        // this.countChange.emit(this.card); 
        // this.label1.getnote(this.card)
        // this.pin = [];
        // this.unpin = [];
        // for (let i = 0; i < this.card.length; i++) {
        //   if (this.card[i].isPined) {
        //     this.pin.push(this.card[i]);
        //   } else {
        //     this.unpin.push(this.card[i]);

        //   }
        // }

      }, err => {
        console.log('err after ', err);

      })
    } catch (error) {
      console.log('error in getNoteListByName in select label component');

    }


  }
  updateCard(event) {
    try {
      this.getNoteListByName(this.label);

    } catch (error) {
      console.log('error in updateCard in select label component');

    }
  }
  update(value){

  }


}
