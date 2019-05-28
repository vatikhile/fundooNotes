import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor() { }
  result:boolean = true;
  subject = new Subject();



  getView() 
  {
    this.gridview();
    return this.subject.asObservable();
  }

  gridview()
  {
    if(this.result)
    {
      this.subject.next({data:"column"});
      this.result = false;
      console.log(this.result)
    }
    else
    {
      this.subject.next({data:"row"});
      this.result = true;
    }
  } 
}
