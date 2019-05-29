import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { RegisterComponent } from './component/register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { AddNoteComponent } from './component/add-note/add-note.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IconComponent } from './component/icon/icon.component';
import { MatChipsModule } from '@angular/material/chips';
import { AllNotesComponent } from './component/all-notes/all-notes.component';
import {LabelComponent} from './component/label/label.component';
import { TrashComponent } from './component/trash/trash.component';
import { CollaboratorComponent } from './component/collaborator/collaborator.component';
// import { DialogBoxComponent } from './component/dialog-box/dialog-box.component';
import { ArchiveComponent } from './component/archive/archive.component'
import { MatDialogModule } from '@angular/material/dialog';
import { EditNotesComponent } from './component/edit-notes/edit-notes.component';
// import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPasswordComponent,
    ForgotComponent,
    RegisterComponent,
    DashboardComponent,
    AddNoteComponent,
    IconComponent,
    AllNotesComponent,
    LabelComponent,
    TrashComponent,
    CollaboratorComponent,
    // DialogBoxComponent,
    ArchiveComponent,
    EditNotesComponent,
   
    

  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    HttpClientModule,
    FlexLayoutModule,
    MatRadioModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatTooltipModule,
    MatChipsModule,
    MatDialogModule,
    
  ],

  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[LabelComponent,EditNotesComponent]
})
export class AppModule { }
