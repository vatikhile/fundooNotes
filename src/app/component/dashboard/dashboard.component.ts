import { Component, OnInit, ViewChild,EventEmitter,Output } from '@angular/core';
import { LabelComponent } from '../label/label.component';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { NoteServiceService } from 'src/app/core/service/note/note-service.service';
import { UpdateServiceService } from '../../core/service/update/update-service.service'
import { ViewService } from '../../core/service/viewService/view.service';
import { environment } from 'src/environments/environment';
import { ProfilePicComponent } from '../profile-pic/profile-pic.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  private flag: boolean = false;
  toggle: boolean = true;
  // list: boolean = true;
  // grid: boolean=false;
  addLabels: any = [];
  
  message: any;
  header: string;

  firstName = localStorage.getItem('firstName');
  email = localStorage.getItem('email');
  lastName = localStorage.getItem('lastName');
  profilImaage = localStorage.getItem('profilPic');
  values: string;


  constructor(private dialog: MatDialog, private noteService: NoteServiceService, private dataService: UpdateServiceService, private view: ViewService, private route: Router) {

  }
  img = environment.url + this.profilImaage;

  ngOnInit() {
    localStorage.getItem('profilePic');
    this.showLabel();
    this.sidenavUpdateLabel();
    this.header = 'fundooNotes';
    // console.log("piccc",this.img);
 
  }
  @Output() count = new EventEmitter();



  profileImage(event): void {
    const dialogRef = this.dialog.open(ProfilePicComponent, {
      width: '400px',
      data: event
    });
    dialogRef.afterClosed()
      .subscribe(result => {
        this.img = environment.url + localStorage.getItem("profilePic")
      });
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
    this.dialog.open(LabelComponent);
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

    this.toggle = false;
    this.view.gridview(this.toggle);

  }
  changeView1() {
    this.toggle = true;
    this.view.gridview(this.toggle);
  }


  search(searchText) {
    this.count.emit(searchText)
    console.log("avhv",searchText);
    
    this.route.navigate(['', 'search']);

  }


  archive() {
    this.route.navigate(['', 'archive']);

  }
  noteButton() {
    this.header = 'Notes';
    this.route.navigateByUrl('/addNotes');
  }
  trash() {
    this.header ='trash'
    this.route.navigate(['', 'trash']);
  

  }
  reminder() {

    this.header = 'Reminder';
    this.route.navigate(['', 'reminder']);
  }
  // onSearchChange(event) {
  //   typeof(event);
  //   console.log(event);
  // // this.searchHelper.searchNotes(event);
  // }
  onKey(event: any) { // without type info
    // this.values = event.target.value;
    this.values=event.key;
    this.view.search(this.values)
    console.log("abbs",this.values);
    
  }
}


