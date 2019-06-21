import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor,  HttpHeaders } from '@angular/common/http'
import { AuthService } from './auth.service';
import { UserService } from './user/user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector){}

  intercept(req, next) {
    let authService = this.injector.get(UserService)
    let tokenizedReq = req.clone(
      {
        SetHeaders:
        {
          Authorization:`${authService.loggedIn()}`
        }
       // headers: req.headers.set("Authorization",authService.loggedIn()
         //)
        //  headers:new HttpHeaders({
        //   'Authorization': 'my-auth-token'
        //  })
      }
    )
    return next.handle(tokenizedReq)
  }

}
