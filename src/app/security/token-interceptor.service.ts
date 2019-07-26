import { Injectable, Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import { UserService } from '../user/user.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }
  intercept(req, next){
    let AuthService = this.injector.get(UserService)
    let tokenizeReq=req.clone({
      setHeaders:{
        Athorizeation:`Bearer xx.yy.zz ${AuthService.getToken()}`
      }
    })
    return next.handle(tokenizeReq)
  }
}
