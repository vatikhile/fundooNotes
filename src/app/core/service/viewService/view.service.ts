import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {HttpServiceService} from '../../service/http/http-service.service'
import{AllNotesComponent} from 'src/app/component/all-notes/all-notes.component'
import {UpdateServiceService} from '../../service/update/update-service.service'
@Injectable({
  providedIn: 'root'
})
export class ViewService {
  // result: boolean;
  toggle:boolean=true;
  
  
  constructor(private http:HttpServiceService, private get:UpdateServiceService) { }
  // result:boolean = true;
  subject = new Subject();



  getView() 
  {
    this.gridview(this.toggle);
    return this.subject.asObservable();
  }

  gridview(result)
  {
    this.toggle=result
    if(this.toggle==false)
    {
      // this.result=false;
      this.subject.next({data:"column"});
      // this.result = false;
      // console.log(this.result)
      // return this.subject.asObservable();
    }
    else
    {
      this.subject.next({data:"row"});
      // return this.subject.asObservable();
      // this.result = true;
     
    }
  } 
  getNotes(){
    this.http.getData("notes/getNotesList")
    this.get.changeMessage('');
    
  }

 
// getMessage(): Observable<any> {
//   this.subject.next({ data });
//   console.log("333",noteId1);
  
//   return this.subject.asObservable();
//   // return this.subject.asObservable();
// }
  
}
