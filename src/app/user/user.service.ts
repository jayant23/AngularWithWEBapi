import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../user/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:54236/Service.svc/';

  constructor(private http:HttpClient) { }
  createUser(user:User): Observable<User> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin': 'POST'})};
    console.log("hi this is user consoling")
    console.log(user);
    return this.http.post<User>(this.url + 'CreateUser',user);
  }
  login_User(user:User): Observable<User>{
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin': 'POST'})};
    console.log(user);
    return this.http.post<User>(this.url +'LoginUser',user);
  }
  loggedIn()
  {
    // !! means if token value is present on the browser the it return  true else false;
    return localStorage.getItem('token');
  }
  
}
