import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
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
