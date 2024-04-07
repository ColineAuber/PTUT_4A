import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
    const jeton = localStorage.getItem('jeton');

    const clonedRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${jeton}`
      }
    });

 
    return next.handle(clonedRequest);
  }
}