import { Injectable } from '@angular/core';
import { HttpServiceService } from '../http/http-service.service'

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  constructor(private http: HttpServiceService) { }
  addNote(data) {
    return this.http.addNotes("notes/addNotes", data)
    console.log("in note service");
  }

  getNotes() {
    return this.http.getData("notes/getNotesList")

  }
  addLabel(data) {
    return this.http.postEdit("noteLabels", data)

  }
  showNoteLabel() {
    return this.http.showLabel("noteLabels/getNoteLabelList")
  }
  deleteLabels(id){
    return this.http.delete('notelabels/'+id+'/deleteNoteLabel');
  }
  updateLabel(id,data)
  {
    
    return this.http.postEd('noteLabels/'+id+'/updateNoteLabel',data);
    
    
  }
}

