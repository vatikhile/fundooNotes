import { Injectable } from '@angular/core';
import {HttpServiceService} from '../http/http-service.service'

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  constructor(private http:HttpServiceService) { }
addNote(data)
{
return this.http.addNotes("notes/addNotes",data)
console.log("in note service");
}

getNotes(){
return this.http.getData("notes/getNotesList")

}

}
