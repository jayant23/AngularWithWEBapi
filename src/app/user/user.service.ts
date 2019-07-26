import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user/user';
import { Observable } from 'rxjs';
import { body } from '../user/user';
//import { eventlist } from '../user/user';
//import { getunitList } from '../user/user'
//import { firstworkingDay } from '../user/user'
//import { userInfo } from 'os';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:54236/Service.svc/';

  constructor(private http: HttpClient) { }
  createUser(user: User): Observable<User> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'POST' }) };
    console.log("hi this is user consoling")
    console.log(user);
    return this.http.post<User>(this.url + 'CreateUser', user);
  }

  login_User(user: User): Observable<User> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'POST' }) };
    console.log(user);
    return this.http.post<User>(this.url + 'LoginUser', user);
  }
  
  login(): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'POST' })
    };
    console.log(body);
    return this.http.post<User>('https://user-api.simplybook.me/login', body);
  }
/*
  geteventlist(): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'POST,OPTIONS',
        'X-Company-Login': 'mib',
        'X-Token': 'db50a982bddc22e2fd0ea71970bd2b53cc2a9f33c53241a345993ff49ae868ec'
      })
    };
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Company-Login': 'mib',
      'X-Token': 'db50a982bddc22e2fd0ea71970bd2b53cc2a9f33c53241a345993ff49ae868ec'
    });
    let options = { headers: headers };
    console.log(eventlist);

    return this.http.post<User>('https://user-api.simplybook.me', eventlist, options);
  }

  getUnitList(): Observable<User> {
    let headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'X-Company-Login': 'mib',
        'X-Token': 'db50a982bddc22e2fd0ea71970bd2b53cc2a9f33c53241a345993ff49ae868ec'
      }
    );
    let options = { headers: headers };
    console.log(getunitList)
    return this.http.post<User>('https://user-api.simplybook.me', getunitList, options)

  }

  getFirstWorkingDay(): Observable<User> {
    let headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'X-Company-Login': 'mib',
        'X-Token': 'ae5814dbb4a33d1170a7f3fce456ced0a9cef38896126081bf751f9597d856ce'
      }
    );
    let options = { headers: headers };
    console.log(firstworkingDay)
    return this.http.post<User>('https://user-api.simplybook.me', firstworkingDay, options)
  }
*/
  getToken() {
    // !! means if token value is present on the browser the it return  true else false;
    return localStorage.getItem('token');
  }
}
