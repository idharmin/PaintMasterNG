import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/Models/Login';
import { LoginService } from 'src/app/Services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  disableTextbox = false;
  Login: Login = {
    ld_id: 0,
    ld_username: "",
    ld_password: "",
    ld_user_role: ""
  }
  constructor(private _LoginService: LoginService, private _Router: Router) { }

  ngOnInit(): void {
  }
  //---------------------------------------------------
  onClickNext() {
    if (this.Login.ld_username.length == 0) {
      alert('Username cannot be empty')
      return;
    }
    this._LoginService.CheckUserName(this.Login.ld_username)
      .subscribe({
        next: (Response) => {
          if (Response.length == 0) {
            alert('no username found')
            return;
          }
          var dvNext = document.getElementById('dvNext');
          if (dvNext != null) {
            dvNext.className = 'd-none';
          }
          var Username = document.getElementById("Username")
          if (Username != null) {
            console.log(!this.disableTextbox);
            this.disableTextbox = !this.disableTextbox;
          }
          var dvLogin = document.getElementById('dvLogin');
          if (dvLogin != null) {
            dvLogin.className = 'd-block';
          }

        }
      })
  }
  //---------------------------------------------------
  onClickLogin() {
    if (this.Login.ld_username.length == 0) {
      alert('Username cannot be empty')
      return;
    }

    if (this.Login.ld_password.length == 0) {
      alert('Password cannot be empty')
      return;
    }
    this._LoginService.CheckPassword(this.Login.ld_username, this.Login.ld_password)
      .subscribe({
        next: (Response) => {
          if (Response.length == 0) {
            alert('Wrong Password')
            return;
          }          
        }
      });
  }
  //---------------------------------------------------
  onClickCancel() {
    var Username = document.getElementById("Username")
    if (Username != null) {
      this.disableTextbox = !this.disableTextbox;
      Username.textContent = '';
    }

    var dvNext = document.getElementById('dvNext');
    if (dvNext != null) {
      dvNext.className = 'text-center d-block';
    }

    var dvLogin = document.getElementById('dvLogin');
    if (dvLogin != null) {
      dvLogin.className = 'd-none';
    }
  }
  //---------------------------------------------------

}
