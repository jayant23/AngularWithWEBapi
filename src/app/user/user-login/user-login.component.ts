import { Component, OnInit } from '@angular/core';
import{FormBuilder, Validator, Validators} from '@angular/forms';
import { UserService } from '../user.service';
import {User} from '../user'
import { Route, Router} from  '@angular/router'
import { stringify } from '@angular/core/src/render3/util';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  dataSaved = false;
  userlogin_Form: any;
  massage = null;
  Isloggedin = false;
  constructor(private formbulider: FormBuilder, private userService: UserService,private router:Router, private _router:AuthService) { }

  ngOnInit() {
    this.userlogin_Form = this.formbulider.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
    this.massage = null;
  }

  onFormSubmit() {
    this.dataSaved = false;
    this.massage = null;
    const userNamePass = this.userlogin_Form.value;
    this.login_User(userNamePass);
  }

  login_User(userNamePass:User)
  {
    // this._router.loginUser(userNamePass).subscribe(res =>{
    //   localStorage.setItem('token', res.LoginUserResult);
    //   this.router.navigate(['../employee']);
    // })
this.userService.login_User(userNamePass).subscribe( (res)=>{
  res =  res["LoginUserResult"];
  localStorage.setItem('token',String(res));
  this.dataSaved = true;
  console.log(this);
 this.massage = 'User login Successfully';
 console.log("navigate here and message "+this.massage);
 if(!!localStorage.getItem('token')==false)
 {
  this.router.navigate(['/login_User']);
 }
 else
 {
  this.router.navigate(['../employee']);
  this.Isloggedin=true;
 }
})
  }
}
