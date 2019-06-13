import { Component, OnInit,Input} from '@angular/core';
import {HttpServiceService } from '../../core/service/http/http-service.service'
import { UpdateServiceService } from 'src/app/core/service/update/update-service.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-display-labels',
  templateUrl: './display-labels.component.html',
  styleUrls: ['./display-labels.component.scss']
})
export class DisplayLabelsComponent implements OnInit {
  addNote: any;
  selectable = true;
  removable = true;
  

  constructor(private http:HttpServiceService,private update:UpdateServiceService,private snackbar:MatSnackBar) { }

  ngOnInit() {
  }

  @Input() noteData:any;
@Input()  noteId:any;



/** Remove Label from Note*/
addLabelToNote(noteId,lableId){
  console.log(noteId);
  
  this.http.postLabel('notes/'+noteId+'/addLabelToNotes/'+lableId+'/remove',{}).subscribe(
    (response:any)=>{
      console.log(response);
                this.addNote=response.data
                this.update.changeMessage('rewq');
                console.log("swrwer",this.addNote);
              this.snackbar.open('label removed successfully','End now', {duration: 1000});
    },
    (error)=>{
      console.log(error);
      this.snackbar.open('label not removed', 'End now', {duration: 1000});

      
    }
  )
  
}

}










//   readonly separatorKeysCodes: number[] = [ENTER, COMMA];
//   fruits: Fruit[] = [
//     {name: 'Lemon'},
//     {name: 'Lime'},
//     {name: 'Apple'},
//   ];

//   add(event: MatChipInputEvent): void {
//     const input = event.input;
//     const value = event.value;

//     // Add our fruit
//     if ((value || '').trim()) {
//       this.fruits.push({name: value.trim()});
//     }

//     // Reset the input value
//     if (input) {
//       input.value = '';
//     }
//   }

//   remove(fruit: Fruit): void {
//     const index = this.fruits.indexOf(fruit);

//     if (index >= 0) {
//       this.fruits.splice(index, 1);
//     }
//   }
// }
