import { Component, OnInit,Inject , Output, EventEmitter, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  // colorCode: string[][]= 
  // [['white','lightGreen','purple','red'],
  // ['orange','teal','pink','darkBlue'],['blue','brown','yellow','gray']];
  color:string;
  constructor(){
  // @Inject(MAT_DIALOG_DATA) private data:{ notes: any}) {
    // this.http.getRequest('/label/getlabel').subscribe(data => this.userLabel = data );
   }
//   notes=this.data.notes;
ngOnInit() {
  // console.log("color");

 
}
@Output() countChange = new EventEmitter();
  changeColor(color){
    // this.color=color;
    // this.notes.color= color;

      this.countChange.emit(color);

    console.log("color",color);
    // console.log("color",color);
    
     }
  colorCodes=
    [
      [
        { name: "white",hexcode: "#ffffff" },
        { name: "lightGreen",hexcode: "#f28b82" },
        { name: "purple", hexcode: "#f7bc04" },
        { name: "red", hexcode: "#faf474" },
      ],
      [
        { name: "Teal", hexcode: "#cbff90" },
        { name: "pink", hexcode: "#a7ffeb" },
        { name: "orange", hexcode: "#cbf0f8" },
        { name: "blue", hexcode: "#adcbfa" },
      ],
      [
        { name: "brown", hexcode: "#d7aefb" },
        { name: "yellow", hexcode: "#fdcfe8" },
        { name: "darkBlue", hexcode: "#cbb294" },
        { name: "gray", hexcode: "#e8eaed" }
      ]
    ]

}
