import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatDialog } from '@angular/material';
import { LabelComponent } from '../label/label.component';
import { MatDialog } from '@angular/material';
import { Router} from '@angular/router';
import { NoteServiceService } from 'src/app/core/service/note/note-service.service';
import { UpdateServiceService } from '../../core/service/update/update-service.service'
import { ViewService } from '../../core/service/viewService/view.service';
// import {NoteSearchPipePipe} from '../../pipe/note-search-pipe.pipe'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  private flag: boolean = false;

  list: boolean = true;
  grid: boolean = false;
  addLabels: any = [];
  email: string;
  searchText:any;
  firstName: string;
  message: any;
  header: string;
  lastName: string;
  profilImaage: string;
  // @ViewChild(LabelComponent) child;
  constructor(private matDialog: MatDialog, private noteService: NoteServiceService, private dataService: UpdateServiceService, private view: ViewService,private route:Router) {
    this.firstName = localStorage.getItem('firstName'),
      this.email = localStorage.getItem('email'),
      this.lastName = localStorage.getItem('lastName'),
      this.profilImaage = localStorage.getItem('profilPic')
  }

  ngOnInit() {
    this.showLabel();
    this.sidenavUpdateLabel();
    this.header = 'fundooNotes';
    
  }

  /*****
  @purpose:on the sidenav display all the labels which are already added
  ******/

  showLabel() {
    this.noteService.showNoteLabel().subscribe(
      (response: any) => {
        this.addLabels = response.data.details;
        // this.addLabels=this.child.addLabels
        console.log(this.addLabels);

      },
      error => {
        console.log("error");
      }
    )
  }

  /*****
    @purpose:In sidenav after click on edit button it opens the dialog box
    ******/
  dialogOpen() {

    console.log('add');
    this.matDialog.open(LabelComponent);
  }
  /*****
  @purpose:After click on signout it clear the local storage and redirect on login page
     ******/
  onSignout() {
    localStorage.clear();

  }

  /*****
   @purpose:After performing updation deletion of label on dialog box it update the labels on sidenav  
      ******/
  sidenavUpdateLabel() {
    this.dataService.currentMessage.subscribe(
      (response: any) => {
        this.message = response;
        this.showLabel();
        // this.deleteLabel();
      }
    )
  }
  changeView() {
    // toggle the button
    if (this.grid) {
      this.grid = false;
      this.list = true;
      this.view.gridview();
    }
    else {
      this.list = false;
      this.grid = true;
      this.view.gridview();
    }


  }
  note() {
    this.header = 'Notes';

  }
  search()
  {
this.route.navigateByUrl('/search');
  }
  searchmessage(){
    this.dataService.messageSearch(this.searchText);
  }
  // onSearchChange(event) {  
  //   typeof(event);
  //   console.log(event);
  // this.searchTermSharing.searchNotes(event);
  // }
//  search(search:string){
//         this.searchTermSharing.transform(search);

//       }



}


