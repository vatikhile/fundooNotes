import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  colorCode: string[][]= 
  [['white','lightGreen','purple','red'],
  ['orange','teal','pink','darkBlue'],['blue','brown','yellow','gray']];
  color:string;
  constructor(){
  // @Inject(MAT_DIALOG_DATA) private data:{ notes: any}) {
    // this.http.getRequest('/label/getlabel').subscribe(data => this.userLabel = data );
   }
//   notes=this.data.notes;
ngOnInit() {
  console.log("color");

 
}
  changeColor(color:string){
    // this.color=color;
    // this.notes.color= color;
    console.log("color",this.color);
    console.log("color",color);
    
     }
  colors=[
    [
      {name:"white",hexcode:"#ffffff"},
      {name:"lightGreen",hexcode:"#90ee90"},
      {name:"purple",hexcode:"#800080"},
      {name:"red",hexcode:"#ff0000"}
    ],
    [
      {name:"Teal",hexcode:"#008080"},
      {name:"pink",hexcode:"#ffc0cb"},
      {name:"orange",hexcode:"#ffa500"},
      {name:"blue",hexcode:"#0000ff"}
    ],
    [
      {name:"brown",hexcode:"#a52a2a"},
      {name:"yellow",hexcode:"#ffff00"},
      {name:"darkBlue",hexcode:"#00008b"},
      {name:"gray",hexcode:"#808080"}
    ],
  ]

}
