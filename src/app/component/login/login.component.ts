import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserModel } from '../../core/model/user-model'
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServiceService } from '../../core/service/user-service.service';

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
    this.userService.postRequest('user/login', this.login).subscribe(
      data => {
        console.log("response", data);

        this.snackbar.open('login sucessfullly', "", { duration: 4000 })

      },
      error => {
        this.snackbar.open('login fail', "", { duration: 4000 })

      }

    )


  }
}
