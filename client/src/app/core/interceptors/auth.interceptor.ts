import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

      const idToken = localStorage.getItem('token');
      // console.log(idToken);
      
      if (idToken) {
        const cloned = req.clone({headers: req.headers.set('Authorization', 'JWT ' + idToken)});
        return next.handle(cloned);
      } else {
        return next.handle(req);
      }
   }
}
