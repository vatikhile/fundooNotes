import { Component, OnInit,Input } from '@angular/core';
import {SearchService} from '../../core/service/searchService/search.service'
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
  text: any;
  searchData:any;
  // destroy$:Subject<boolean>=new Subject<boolean>();

  constructor(private search:SearchService) { }
// notes:Notes[] =[];
// message:string;
// notesArray=[];
  ngOnInit() {
    // console.log("search",this.searchText);
  
    // this.view.getNotes();
    // this.view.getsearch().subscribe(
    //   (res) => {
    //     this.searchText=res;
    //     console.log("search",this.searchText);
    //     console.log("response",res);
        this.submit();
        
      
      // })  
    
//     this.getNotes();
//     this.updateService.Notes
//     .pipe(takeUntil(this.destroy$))
//     .subscribe(message=>{
//       this.message=message;
//     })
  }
  // @Input() searchText1:any;
  // @Output() countChange1= new EventEmitter();
  // @Input() searchText:any
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

submit(){
  this.search.getsearch().subscribe(
    (res) => {
      this.searchData=res;
      console.log("search",this.searchData);
      console.log("response",res);
      // this.view.getNotes();
      
      // this.countChange1.emit(this.searchData);
    
    })
}
}
