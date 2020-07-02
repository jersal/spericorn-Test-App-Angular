import { Injectable } from '@angular/core';
import { HttpEvent,HttpInterceptor,HttpHandler,HttpRequest,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  url:string;
  constructor() { }
  
  intercept(req:HttpRequest<any>,next:HttpHandler): Observable<HttpEvent<any>>{
      let headers=new HttpHeaders();
      this.url=environment.BASE_URL + req.urlWithParams;
      const token=localStorage.getItem('token');
      if(token){
          headers = headers.set('Authorization',token)
      }
      const authRequest=req.clone({headers:headers,url:this.url});
      return next.handle(authRequest);
  }
}

