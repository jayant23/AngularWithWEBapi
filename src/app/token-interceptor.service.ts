import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor,  HttpHeaders, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http'
import { AuthService } from './auth.service';
import { UserService } from './user/user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector){}

 intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  const token = localStorage.token; 
  const name = localStorage.username;
console.log(token);
console.log(name);
  if (!token) {
    return next.handle(req);
  }

  const req1 = req.clone
  ({
    headers: req.headers.set('Authorization', `${token}`)
  });
  return next.handle(req1);
}
}
