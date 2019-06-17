import { Injectable } from '@angular/core';
import { Subject ,Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuetionAnsService {
  data: any;

  constructor() { }
  subject = new Subject();
  noteId(notesData: any) {
    console.log("idddd",notesData);
    this.data=notesData;
    this.subject.next(notesData);
    // this.subject.next({ data :""});
    // this.subject.next({data:"column"});
  

}
get(){
  this.noteId(this.data);
  return this.subject.asObservable();
}
}
