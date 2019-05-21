import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {NoteServiceService} from '../../service/note/note-service.service';
@Injectable({
  providedIn: 'root'
})
export class UpdateServiceService {
  newData = new BehaviorSubject<any>([]);
  updated = this.newData.asObservable();
  constructor(private http: NoteServiceService) {  
    this.updatedData();
  }
  updatedData() {
    this.http.getNotes().subscribe(data => {
      this.newData.next(data.data.data);
      console.log("getting...", data)
    });
  }
}

