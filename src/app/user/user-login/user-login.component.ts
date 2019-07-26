import { Component, OnInit } from '@angular/core';
import{FormBuilder, Validator, Validators} from '@angular/forms';
import { UserService } from '../user.service';
import {User, body} from '../user'
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
    this.login();
/*
    this.geteventlist()
    this.getunitList();
    this.getFirstWorkingDay();
*/
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
  //this.login();
  this.userService.login_User(userNamePass).subscribe( (res)=>{
  res =  res["LoginUserResult"];
  var name = res;
   name = name.split(',')[1];
  localStorage.setItem('username',name)
  localStorage.setItem('token',String(res.split(',')[0]));
 // localStorage.setItem('username',String(res))
  this.dataSaved = true;
  
  console.log(res);
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
  // SimplyBook.me login
  login()
  {
    this.userService.login().subscribe( (res)=>{
      console.log("simplybook.me returs "+JSON.stringify(res))
  })
    }
    /*
    geteventlist()
  {
    this.userService.geteventlist().subscribe( (res)=>{
      console.log("simplybook.me returs time matrix "+JSON.stringify(res))
  })
    }
    getunitList()
    {
      this.userService.getUnitList().subscribe((res)=>{
        console.log("simplybook.me return unit list "+JSON.stringify(res))
      })
    }
    getFirstWorkingDay()
    {
      this.userService.getFirstWorkingDay().subscribe((res)=>{
        console.log("simplybook.me return unit getFirstWorkingDay "+JSON.stringify(res))
      })
    }
    */
}
