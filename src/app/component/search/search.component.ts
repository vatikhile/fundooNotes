import { Component, OnInit, Input } from '@angular/core';
import {UpdateServiceService} from '../../core/service/update/update-service.service';
import {Notes} from '../../core/model/Notes/notes'
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators'
import { SubjectSubscriber } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  destroy$:Subject<boolean>=new Subject<boolean>();

  constructor(private updateService:UpdateServiceService) { }
notes:Notes[] =[];
message:string;
notesArray=[];
  ngOnInit() {
    this.getNotes();
    this.updateService.Notes
    .pipe(takeUntil(this.destroy$))
    .subscribe(message=>{
      this.message=message;
    })
  }
  getNotes(){
    this.updateService.Notes.pipe(takeUntil(this.destroy$))
    .subscribe((response:any)=>{
      this.notes=response["data"].data
      this.notesArray=[];
    },
    (error)=>{
      console.log("error occur while  searching");
      
    })
    
  }

}
