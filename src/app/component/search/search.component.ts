import { Component, OnInit, Input } from '@angular/core';
import { ViewService } from 'src/app/core/service/viewService/view.service';
import {UpdateServiceService} from '../../core/service/update/update-service.service';
import {Notes} from '../../core/model/Notes/notes'
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators'
import {NoteSearchPipePipe} from '../../pipe/note-search-pipe.pipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  // destroy$:Subject<boolean>=new Subject<boolean>();

  constructor(private view:ViewService) { }
// notes:Notes[] =[];
// message:string;
// notesArray=[];
  ngOnInit() {
    console.log("search",this.searchText);
  
    this.view.getNotes();
    
//     this.getNotes();
//     this.updateService.Notes
//     .pipe(takeUntil(this.destroy$))
//     .subscribe(message=>{
//       this.message=message;
//     })
  }
  @Input() searchText:any
//   getNotes(){
//     this.updateService.Notes.pipe(takeUntil(this.destroy$))
//     .subscribe((response:any)=>{
//       this.notes=response["data"].data
//       this.notesArray=[];
//     },
//     (error)=>{
//       console.log("error occur while  searching");
      
//     })
    
//   }
// search(){
//   console.log("search",this.searchText);

// }

}
