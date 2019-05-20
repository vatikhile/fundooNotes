import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UserModel } from '../../core/model/Users/user-model'
import { UserServiceService } from '../../core/service/user/user-service.service'
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  register: UserModel = new UserModel();
  firstName = new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z ]*")]);
  lastName = new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z ]*")]);
  userName = new FormControl('', [Validators.required, Validators.email]);

  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  confirmPassword = new FormControl('', [Validators.required, Validators.minLength(6)]);
  service = new FormControl('', [Validators.required]);

  constructor(private userService: UserServiceService, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  firstNameError() {
    return this.firstName.hasError('required') ? 'Enter first name' : '';
  }

  lastNameError() {
    return this.lastName.hasError('required') ? 'Enter last name' : '';
  }
  userNameError() {
    return this.userName.hasError('required') ? 'choose Gmail address' : '';
  }
  passwordError() {
    return this.password.hasError('required') ? 'Enter a password' : '';
  }
  confirmPasswordError() {
    return this.confirmPassword.hasError('required') ? 'Enter a password' : '';
  }
  serviceError() {
    return this.service.hasError('required') ? 'Enter service name' : '';
  }


  submit() {
    console.log("dataa sucess", this.register);
    this.userService.register(this.register).subscribe(
      data => {
        console.log("response", data);

        this.snackbar.open('register sucessfullly')

      },
      error => {
        this.snackbar.open('not register')
        console.log("error", error);
      }

    )
  }
}
