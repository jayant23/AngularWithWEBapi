import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { User } from './user/user';

@Injectable()
export class AuthService {

  private _registerUrl = "http://localhost:54236/Service.svc/";
  private _loginUrl = "http://localhost:54236/Service.svc/";

  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user:User) {
    return this.http.post<any>(this._registerUrl + 'CreateUser', user)
  }

  loginUser(user:User) {
    return this.http.post<any>(this._loginUrl + 'LoginUser', user)
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/events'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }
}
