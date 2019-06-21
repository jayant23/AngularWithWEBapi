import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req, next){
    let tokenizeReq=req.clone({
      setHeaders:{
        Athorizeation:'Bearer xx.yy.zz'
      }
    })
    return next.handle(tokenizeReq)
  }
}
