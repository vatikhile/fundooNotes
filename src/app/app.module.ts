import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
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
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { AddNoteComponent } from './component/add-note/add-note.component';
import {MatTooltipModule} from '@angular/material/tooltip'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPasswordComponent,
    ForgotComponent,
    RegisterComponent,
    DashboardComponent,
    AddNoteComponent
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
MatTooltipModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
