import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditorService {
  // this.data1=text;
  text:any[];
  data: any;
  

  constructor() { }
  subject =new Subject();
  editorData(text:any){
    this.data=text;
    this.subject.next(text);
    console.log("dat1a",text);
  }

  getsearch(){
    console.log("fff",this.data);
    this.editorData(this.data);
    return this.subject.asObservable();

  }

}
