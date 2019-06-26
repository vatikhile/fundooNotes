import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../core/service/http/http-service.service'
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { environment } from '../../../environments/environment';
import { Question, reply } from "../../core/model/question-and-answer/question"
import { UpdateServiceService } from '../../core/service/update/update-service.service'
// import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss']
})

export class QuestionAnswerComponent implements OnInit {

  noteId: any;
  notesData: any;
  notes: any;
  editorContent: any;
  newContent: any;
  value: any
  profilpic: any;
  img: any;
  value1: boolean = true;
  editorContent1: any;
  questionId: any;
  notes1: any;
  show = false;
  sidnav: string;
  title: any;
  user: any;
  description: any;
  AnswerArray: any[];
  parentId: any;
  display: boolean;
  showEditorId = false;
  showSecondReply = false;
  showSecondId = '';
  showId = '';
  secondId = '';
  public QuestionModel: Question;
  public replyModel: reply;

  // content = "<a href='#' id='cafeteria' class='cafeteria'>Cafeteria</a>";
  constructor(private route: ActivatedRoute, private http: HttpServiceService, private snackbar: MatSnackBar, private update: UpdateServiceService) { }
  // first = localStorage.getItem('firstName');
  // last = localStorage.getItem('lastName');
  // profilImaage = localStorage.getItem('profilPic');

  // alert('gii')

  // transform(value) {
  //   return this.sanitized.bypassSecurityTrustHtml(value);
  // }
  // @Input() notesData:any;

  ngOnInit() {


    // console.log(this.cardToken);
    this.noteId = this.route.snapshot.params['id'];
    console.log("idd", this.noteId);
    this.method();

    this.update.currentMessage.subscribe(data => {
      console.log('data in ask question', data);
      this.sidnav = data;


    }, err => {
      console.log('error in ask question', err);

    })

  }


  ////


  // localStorage.getItem('profilePic');


  method() {
    this.http.noteData('notes/getNotesDetail/' + this.noteId).subscribe(
      (res) => {
        console.log("response",res);
        
        this.notes = res['data']['data'];
console.log("notes",this.notes);

        this.title = this.notes[0].title;
        console.log("title",this.title);
        this.user = this.notes[0].user;
        console.log("user",this.user);
        this.description = this.notes[0].description;
        console.log("description",this.description);
        this.value = this.notes[0].questionAndAnswerNotes[0];
        console.log("value",this.value);
      
        this.AnswerArray = this.notes[0].questionAndAnswerNotes;
        console.log("AnswerArray", this.AnswerArray);
        if (this.notes[0].questionAndAnswerNotes[0] != undefined)
        console.log("full");
          this.parentId = this.notes[0].questionAndAnswerNotes[0].id;
          console.log("parentId",this.parentId);
          
        this.AnswerArray.splice(0, 1);
        console.log("aplice array",this.AnswerArray.splice(0, 1));
        this.display = true;
        // this.spinnerService.hide();
        console.log(this.AnswerArray);
        if (this.AnswerArray != null)
        console.log("blank");
        
          for (let i = 0; i < this.AnswerArray.length; i++) {
            console.log(this.AnswerArray[i].id, 'Id and parent id', this.AnswerArray[i].parentId);
          }
      },
      
      err => {
        console.log('error ', err);

      })


  }

  // console.log("id", this.notes[0].questionAndAnswerNotes[0].id);
  // this.questionId= this.notes[0].questionAndAnswerNotes[0].id
  // console.log("response", this.value);
  // this.value = this.notes[0].questionAndAnswerNotes[0]
  // console.log("image url", this.notes[0].questionAndAnswerNotes[0].user.imageUrl);
  // if(this.value = undefined)
  // {

  //   this.profilpic = this.notes[0].questionAndAnswerNotes[0].user.imageUrl
  //   this.img = environment.url + this.profilpic;
  //   console.log("profil", this.img);

  // }
  // else 
  // {
  // this.profilpic=''/;
  //         console.log("profil",this.profilpic);


  //       }

  //       this.snackbar.open("notes get sucessfully", "", { duration: 2000 })
  //     },
  //     (error) => {
  //       this.snackbar.open("error occur", "", { duration: 2000 })

  //     })
  // }




  question() {
    this.showEditorId = false;
    var data = {
      "message": this.editorContent,
      "notesId": this.noteId
    }
    console.log("question body====>", data);
    if (this.editorContent == null) {
      this.snackbar.open(
        "Froala editor is empty & click on submit button", "", { duration: 2000 })

    }
    else {
      this.http.addQuestion('/questionAndAnswerNotes/addQuestionAndAnswer', data)
        .subscribe(

          (response: any) => {
            this.method();
            // this.showLabel();
            console.log("question added sucessfully", response);
            // this.dataService.changeMessage('')

            this.snackbar.open(
              "question add sucessfully", "",
              { duration: 2500 }

            )
            this.editorContent = ""
          },
          error => {
            this.snackbar.open(
              "error occur", "",
              { duration: 2500 }
            )
          }

        )
    }
  }
  reply(id: any) {
    this.showEditorId = false;
    //  var data ={
    //   "message":this.editorContent1,

    //     // "parentId":id
    //   }


    this.replyModel = new reply();
    this.showEditorId = false;
    this.replyModel.message = this.editorContent;
    this.replyModel.id = id;
    if (this.editorContent.length < 30 && this.question != undefined) {
      // this.snackbar('Not a proper Answer', '');
      this.editorContent = '';
      return;
    }
    console.log(this.replyModel);



    this.http.addQuestion('/questionAndAnswerNotes/reply/' + id, this.replyModel).subscribe(
      (res) => {
        // this.answer=
        this.snackbar.open("answer added suceessfully", "", { duration: 2000 });
        console.log("reply", res);

      },
      (error) => {
        this.snackbar.open("error occur", "", { duration: 2000 });
      }

    )
  }
  openEditor() {
    this.value1 = false;
  }
  showEditor(question) {
    console.log(question);

    this.showEditorId = question.id
  }
  showSecondReplyMethod(id: any) {
    this.showSecondReply = true;
    this.showSecondId = id;
  }
  setId(index) {
    console.log('data is ', index);
    console.log('id is ', index.id);

    this.showId = index.id;
  }
  setSecondId(index) {
    this.secondId = index.id;
  }
  hideSecondReplyMethod(id) {
    if (this.showSecondId == id) {
      this.showSecondId = '';
    }
  }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from "@angular/router"
// import { NoteServiceService } from "../../service/note service/note-service.service";
// import { AskQuestionService } from "../../service/askQuestion/ask-question.service";
// import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
// import { MatSnackBar } from '@angular/material';
// import { Question, reply } from "../../model/QuestionAnswerModel/QAModel";
// import { DataService } from '../../service/data service/data.service';

// @Component({
//   selector: 'app-ask-question',
//   templateUrl: './ask-question.component.html',
//   styleUrls: ['./ask-question.component.scss']
// })
// export class AskQuestionComponent implements OnInit {
//   public QuestionModel: Question;
//   public replyModel: reply;
//   constructor(public route: Router, public activeRoute: ActivatedRoute, public noteService: NoteServiceService, public QAService: AskQuestionService, private spinnerService: Ng4LoadingSpinnerService,

//     private snackBar: MatSnackBar,private dataservice:DataService) { }
//   //  cardId
//   cardToken = this.activeRoute.snapshot.params.cardId;
//   title = '';
//   description = '';
//   card: any;
//   editorContent: any;
//   secondId = '';
//   questions = ''
//   AnswerArray = [];
//   question: any;
//   display=false;
//   user: any;
//   rate = 5;
//   htmlField: any;
//   parentId = ''
//   sidnav=false;
//   likeCount = 3;
//   showId = '';
//   likeObject = { "userId": "5c67f5371524250040082dba", "like": true };
//   imgUrl = 'http://34.213.106.173/';
//   showFirstReply = false;
//   showSecondReply = false;
//   showSecondId = '';
//   showEditorId = false;
//   mainClass={
//     sideNavOpen:this.sidnav,
//     sideNavClose:!this.sidnav
//   }
//   ngOnInit() {
//     console.log(this.cardToken);
//     this.getCardDetails();
//     this.dataservice.sideNaveMessage.subscribe(data=>{
//       console.log('data in ask question',data);
//       this.sidnav=data;
//       this.mainClass.sideNavOpen=this.sidnav;
//       this.mainClass.sideNavClose=!this.sidnav;

//     },err=>{
//       console.log('error in ask question',err);

//     })

//   }
//   /**
//  * @description this method is for get card detail by id
//  * @returns nothing
//  */
//   getCardDetails() {
//     console.log(this.question);

//     this.spinnerService.show();
//     try {
//       this.noteService.getNoteDetail(this.cardToken).subscribe(data => {
//         console.log('data ', data['data']['data']);
//         this.card = data['data']['data'];
//         this.title = this.card[0].title;
//         this.user = this.card[0].user;
//         this.description = this.card[0].description;
//         this.question = this.card[0].questionAndAnswerNotes[0];
//         console.log(this.question);

//         this.AnswerArray = this.card[0].questionAndAnswerNotes;
//         if (this.card[0].questionAndAnswerNotes[0] != undefined)
//           this.parentId = this.card[0].questionAndAnswerNotes[0].id;
//         this.AnswerArray.splice(0, 1);
//         console.log(this.question);
//         this.display=true;
//         this.spinnerService.hide();
//         console.log(this.AnswerArray);
//         if (this.AnswerArray != null)
//           for (let i = 0; i < this.AnswerArray.length; i++) {
//             console.log(this.AnswerArray[i].id, 'Id and parent id', this.AnswerArray[i].parentId);
//           }

//       }, err => {
//         console.log('error ', err);

//       })
//     } catch (error) {
//       console.log('error in getCardDetails in askQuestion ', error);

//     }

//   }

//   /**
//    * @description :when use ask the question and hit submit button then this method run 
//    */
//   submit() {
//     try {
//       this.showEditorId = false;
//       console.log(this.editorContent, '   data');
//       this.QuestionModel = new Question();
//       this.QuestionModel.createdDate = new Date();
//       this.QuestionModel.like = [];
//       this.QuestionModel.rate = [];
//       this.QuestionModel.user = this.user;
//       this.QuestionModel.message = this.editorContent;
//       console.log(this.QuestionModel);
//       this.question = this.QuestionModel;
//       const obj = {
//         message: this.editorContent,
//         notesId: this.cardToken
//       }
//       this.QAService.askQuestion(obj).subscribe(data => {
//         console.log(data);
//         this.openSnackBar('Question Added successfully', '');
//         this.editorContent = '';
//       }, err => {
//         console.log(err);

//       })
//     } catch (error) {
//       console.log('error in submit method in ask component');

//     }
//   }


//   /**
//    * @description :this method is for when user press close button then it navigate the page to notes component only
//    */
//   close() {
//     this.route.navigate(['../dashboard'])
//   }

//   /**
//    * @description :this method is for open the snackbar
//    */
//   openSnackBar(message: string, action: string) {
//     this.snackBar.open(message, action, {
//       duration: 2000,
//     });
//   }

//   replyIt(id) {
//     console.log(id);

//     this.replyModel = new reply();
//     this.showEditorId = false;
//     this.replyModel.message = this.editorContent;
//     this.replyModel.id = id;
//     if (this.editorContent.length < 30 && this.question != undefined) {
//       this.openSnackBar('Not a proper Answer', '');
//       this.editorContent = '';
//       return;
//     }
//     console.log(this.replyModel);

//     this.replyService(this.replyModel);
//   }


//   replyService(body) {
//     this.QAService.reply(body).subscribe(data => {
//       console.log('data after reply the question', data);
//       this.openSnackBar('Thankyou For Your Answer', '');

//     }, err => {
//       console.log('err after reply ', err);

//     })
//   }
//   /**
//    * @description this will show thee editor to add answer
//    * @param index 
//    */
//   setId(index) {
//     console.log('data is ', index);
//     console.log('id is ', index.id);

//     this.showId = index.id;
//   }
//   setSecondId(index) {
//     this.secondId = index.id;
//   }
//   showSecondReplyMethod(id) {
//     this.showSecondReply = true;
//     this.showSecondId = id;
//   }
//   hideSecondReplyMethod(id) {
//     if (this.showSecondId == id) {
//       this.showSecondId = '';
//     }
//   }
//   showEditor(question) {
//     console.log(question);

//     this.showEditorId = question.id
//   }
// }




//////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// <!-- loader -->
// <ng4-loading-spinner> </ng4-loading-spinner>



// <div *ngIf="display"  [ngClass]="mainClass">
//   <mat-card class="matCardQuestion" fxFlex=70 fxFlex.sm=80 fxFlex.xs=100 fxLayout='column' fxFlexOffset.xs='0%'>

//     <div class="mainInside" fxLayout='column' fxFlex='100'>
//       <div class='cardDetail' fxLayout='row' fxLayoutAlign="space-between start">

//         <div class="title">
//           {{title}}
//         </div>

//         <div class="close">
//           <button mat-button (click)="close()"> Close</button>
//         </div>
//       </div>
//       <div class="description">
//         {{description}}
//       </div>
//       <div class="divider">
//         <mat-divider></mat-divider>
//       </div>

//       <!-- new question ask display -->
//       <div *ngIf="question == undefined">
//         <h2>Ask a Question</h2>
//         <p>Make sure what you’re asking is unique, concise, and phrased like a question.</p>
//         <div [froalaEditor] [(froalaModel)]="editorContent">
//         </div>
//         <div fxLayout='row' fxLayoutAlign='end'>
//           <div class="ask">
//             <button mat-raised-button class="submit" (click)="submit()">SUBMIT-QUESTION</button>
//           </div>
//         </div>
//       </div>

//       <!-- asked question display -->
//       <div *ngIf="question != undefined">
//         <h2>Asked Questions</h2>
//         <div fxLayout='column'>
//           <div fxLayout='row' fxLayout.xs='column'>
//             <div fxLayout='row'>
//               <div *ngIf="question.user.imageUrl!=undefined" class="image"
//                 [ngStyle]="{'background-image': 'url(' + imgUrl+question.user.imageUrl+ ')'}"></div>
//               <div *ngIf="question.user.imageUrl==undefined" class="image1" fxLayout='row'
//                 fxLayoutAlign="center center">
//                 {{question.user.firstName | slice:0:1 |uppercase}}
//               </div>
//               <div fxLayout=row class="nameDate"> {{question.user.firstName}} {{question.user.lastName}}
//                 &nbsp; <div fxHide.xs=true>{{question.createdDate | date:'medium'}} </div>
//               </div>
//             </div>
//             <div class="icon" fxLayout='row' fxFlexOffset='5%' fxFlexOffset.xs='0%'  fxLayoutAlign.xs="end center"
//               fxLayoutAlign="space-around start" fxLayoutGap='8%'  fxLayoutGap.xs='1%' >
//               <div (click)="showEditorId=true">
//                 <mat-icon>reply</mat-icon>
//               </div>
//               <!-- when user liked then this will show -->
//               <app-like [likeMessage]="question"></app-like>

//               <div>
//                 <!-- star rating display-->
//                 <app-star-rating [rateMessage]="question"></app-star-rating>
//               </div>
//             </div>

//           </div>

//           <div fxLayout='row' class="arrowQuestion" fxLayoutGap='2%' fxLayoutAlign="start center">
//             <div>
//               <mat-icon>arrow_right</mat-icon>
//             </div>
//             <div class="innerhtml" innerHTML="{{question.message}}"></div>
//           </div>
//         </div>
//       </div>
//       <!-- reply the answer to question -->
//       <div *ngIf="showEditorId">
//           <div> <button mat-button (click)="showEditorId=false">close</button></div>
//         <div [froalaEditor] [(froalaModel)]="editorContent">
//         </div>
//         <div fxLayout='row' fxLayoutAlign='end'>
//           <div class="ask">
//             <button mat-raised-button class="submit" (click)="replyIt(question.id)">SUBMIT-ANSWER</button>
//           </div>
//         </div>
//       </div>






//       <!-- answer display -->
//       <div *ngIf="!showFirstReply" class="showFirstReply" fxLayout="row" fxLayoutAlign="end center"
//         (click)="showFirstReply=true">
//         <mat-icon>expand_more</mat-icon> View reply
//       </div>
//       <div *ngIf="showFirstReply" class="showFirstReply" fxLayout="row" fxLayoutAlign="end center"
//         (click)="showFirstReply=false">
//         <mat-icon>expand_less</mat-icon> Hide reply
//       </div>
//       <div *ngIf="showFirstReply &&  AnswerArray ?.length >0" class="answerDisplay">
//         <div class="userAnswer" *ngFor="let index of  AnswerArray">
//           <div *ngIf="index.parentId==parentId && index.isApproved==true" fxLayout='column'>
//             <div fxLayout='row' fxLayout.xs='column'>
//               <div fxLayout='row'>
//                 <div *ngIf="index.user.imageUrl!=undefined" class="imageAnswer"
//                   [ngStyle]="{'background-image': 'url(' + imgUrl+index.user.imageUrl+ ')'}"></div>
//                 <div *ngIf="index.user.imageUrl==undefined" class="image1">
//                   {{index.user.firstName | slice:0:1 |uppercase}}
//                 </div>
//                 <div fxLayout=row class="nameDate"> {{index.user.firstName}} {{index.user.lastName}}
//                   &nbsp; <div fxHide.xs=true>{{index.createdDate | date:'medium'}}</div>
//                 </div>
//               </div>
//               <div class="icon" fxLayout='row' fxFlexOffset='5%' fxFlexOffset.xs='0%' fxLayoutAlign.xs="end center"
//                 fxLayoutAlign="space-around start" fxLayoutGap='8%'>
//                 <div (click)="setId(index)">
//                   <mat-icon>reply</mat-icon>
//                 </div>
//                 <!-- when user liked then this will show -->
//                 <app-like [likeMessage]="index"></app-like>

//                 <div>
//                   <!-- star rating display-->
//                   <app-star-rating [rateMessage]="index"></app-star-rating>
//                 </div>
//               </div>

//             </div>

//             <div fxLayout='row' class="arrowQuestion" fxLayoutGap='2%' fxLayoutAlign="start center">

//               <div class="innerhtmlAnswer" innerHTML="{{index.message}}">
//               </div>
//             </div>
//             <!-- reply the answer to answer -->
//             <div *ngIf="showId == index.id">
//               <div> <button mat-button (click)="showId=''">close</button></div>
//               <div [froalaEditor] [(froalaModel)]="editorContent">
//               </div>
//               <div fxLayout='row' fxLayoutAlign='end'>
//                 <div class="ask">
//                   <button mat-raised-button class="submit" (click)="replyIt(index.id)"
//                     (click)="showId=''">SUBMIT-ANSWER</button>
//                 </div>
//               </div>
//             </div>

//             <!-- ------------------------------------------first reply display --------------------------------------------->
//             <div *ngIf="this.showSecondId != index.id" class="showFirstReply" fxLayout="row" fxLayoutAlign="end center"
//               (click)="showSecondReplyMethod(index.id)">
//               <mat-icon>expand_more</mat-icon> View reply </div>
//             <div *ngIf="this.showSecondId == index.id" class="showFirstReply" fxLayout="row" fxLayoutAlign="end center"
//             (click)="hideSecondReplyMethod(index.id)">
//               <mat-icon>expand_less</mat-icon> Hide reply
//             </div>
//             <div *ngIf="showSecondReply && this.showSecondId == index.id" class="firstReply">
//               <div *ngFor="let user1 of  AnswerArray">
//                 <div *ngIf="user1.parentId==index.id  && user1.isApproved == true">
//                   <div fxLayout='row' fxLayout.xs='column'>
//                     <div fxLayout='row'>
//                       <div *ngIf="user1.user.imageUrl!=undefined" class="imageAnswer"
//                         [ngStyle]="{'background-image': 'url(' + imgUrl+user1.user.imageUrl+ ')'}"></div>
//                       <div *ngIf="user1.user.imageUrl==undefined" class="image1">
//                         {{user1.user.firstName | slice:0:1 |uppercase}}
//                       </div>
//                       <div fxLayout=row class="nameDate"> {{user1.user.firstName}} {{user1.user.lastName}}
//                         &nbsp;<div fxHide.xs=true> {{user1.createdDate | date:'medium'}} </div>
//                       </div>
//                     </div>
//                     <div class="icon" fxLayout='row' fxFlexOffset='5%' fxLayoutAlign="space-around start" fxLayoutAlign.xs="end center"
//                       fxLayoutGap='8%' fxLayoutGap.xs='1%'>
//                       <div (click)="setSecondId(user1)">
//                         <mat-icon>reply</mat-icon>
//                       </div>
//                       <!-- when user liked then this will show -->
//                       <app-like [likeMessage]="user1"></app-like>

//                       <div>
//                         <!-- star rating display-->
//                         <app-star-rating [rateMessage]="user1"></app-star-rating>
//                       </div>
//                     </div>

//                   </div>
//                   <div fxLayout='row' class="arrowQuestion" fxLayoutGap='2%' fxLayoutAlign="start center">

//                     <div class="innerhtmlAnswer" innerHTML="{{user1.message}}">
//                     </div>
//                   </div>
//                   <!-- second reply ask -->

//                   <div *ngIf="secondId == user1.id">
//                     <div> <button mat-button (click)="secondId=''">close</button></div>
//                     <div [froalaEditor] [(froalaModel)]="editorContent">
//                     </div>
//                     <div fxLayout='row' fxLayoutAlign='end'>
//                       <div class="ask">
//                         <button mat-raised-button class="submit" (click)="replyIt(user1.id)"
//                           (click)="secondId=''">SUBMIT-ANSWER</button>
//                       </div>
//                     </div>
//                   </div>

//                   <!-- ................................................................................................... -->
//                   <!-- second reply display -->

//                   <div class="secondReply">
//                     <div *ngFor="let user2 of  AnswerArray">
//                       <div *ngIf="user2.parentId==user1.id && user2.isApproved == true">
//                         <div fxLayout='row' fxLayout.xs='column'>
//                           <div fxLayout='row'>
//                             <div *ngIf="user2.user.imageUrl!=undefined" class="imageAnswer"
//                               [ngStyle]="{'background-image': 'url(' + imgUrl+user2.user.imageUrl+ ')'}"></div>
//                             <div *ngIf="user2.user.imageUrl==undefined" class="image1" fxLayout='row'
//                               fxLayoutAlign="center center">
//                               {{user2.user.firstName | slice:0:1 |uppercase}}
//                             </div>
//                             <div fxLayout=row class="nameDate"> {{user2.user.firstName}} {{user2.user.lastName}}
//                               &nbsp;<div fxHide.xs='true'> {{user2.createdDate | date:'medium'}} </div>
//                             </div>
//                           </div>
//                           <div class="icon" fxLayout='row' fxFlexOffset='5%' fxFlexOffset.xs='0%'
//                             fxLayoutAlign.xs="end center" fxLayoutAlign="space-around start" fxLayoutGap='8%'
//                             fxLayoutGap.xs='1%'>
//                             <!-- when user liked then this will show -->
//                             <app-like [likeMessage]="user2"></app-like>

//                             <div>
//                               <!-- star rating display-->
//                               <app-star-rating [rateMessage]="user2"></app-star-rating>
//                             </div>
//                           </div>

//                         </div>
//                         <div fxLayout='row' class="arrowQuestion" fxLayoutGap='2%' fxLayoutAlign="start center">

//                           <div class="innerhtmlAnswer" innerHTML="{{user2.message}}">
//                           </div>
//                         </div>

//                       </div>
//                     </div>
//                   </div>



//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>



//       </div>
//     </div>

//   </mat-card>

// </div>
