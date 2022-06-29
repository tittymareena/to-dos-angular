import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';

import { Observable, tap, catchError } from 'rxjs';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add custom header
    const customReq = request.clone({
      headers: request.headers.set('app-author', 'Dzhavat')
    });

    console.log('processing request', customReq);

    // pass on the modified request object
    return next
      .handle(customReq)
      .pipe(
      tap((ev: HttpEvent<any>) => {
        if (ev instanceof HttpResponse) {
          console.log('processing response', ev);
        }
      })
      // .catchError(response => {
      //   if (response instanceof HttpErrorResponse) {
      //     console.log('processing http error', response);
      //   }

      //   return Observable.throw(response);
      // })
      );
  }
}
