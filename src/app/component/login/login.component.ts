import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserModel } from '../../core/model/Users/user-model'
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServiceService } from '../../core/service/user/user-service.service';
import { AddNoteComponent } from '../add-note/add-note.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: UserModel = new UserModel();
  email = new FormControl(null, [Validators.required, Validators.email]);

  // Validators.pattern(^[\w.+\-]+@gmail\.com$)

  password = new FormControl(null, [Validators.required, Validators.minLength(6)]);

  // button = new FormControl('', Validators.required);

  constructor(private userService: UserServiceService, private router: Router, private snackbar: MatSnackBar) { }


  emailError() {

    return this.email.hasError('required') ? "Enter an email" : this.email.hasError('email') ? "Enter an valid email" : "";
  }

  passwordError() {

    return this.password.hasError('required') ? 'Enter a password' : '';
  }

  ngOnInit() {
  }

  submit() {
    console.log("dataa sucess", this.login);

    this.userService.login(this.login).subscribe(
      // this.userService.postRequest('user/login', this.login).subscribe(
      data => {
        localStorage.setItem("token", data["id"]);
        localStorage.setItem("Id", data["userId"]);
        localStorage.setItem("firstName", data["firstName"]);
        localStorage.setItem("lastName", data["lastName"]);
        localStorage.setItem("email", data["email"]);
        localStorage.setItem("profilPic", data["imageUrl"]);
        

        console.log("response", data);
        console.log("tokknnn");

        this.snackbar.open('login sucessfullly', "", { duration: 2000 })
        this.router.navigateByUrl('addNote');
      },
      error => {
        this.snackbar.open('login fail', "", { duration: 2000 })

      }
    )


  }
}
