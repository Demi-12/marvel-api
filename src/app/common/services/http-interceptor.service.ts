import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private loadingService: LoadingService,
    private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.addRequest()
    return next.handle(req).pipe(
      catchError(error => {
        this.loadingService.removeRequest();
        return throwError(error);
      }),
      finalize(() => {
        this.loadingService.removeRequest();
      })
    );
  }

  // logout() {
  //   sessionStorage.removeItem('x-access-token');
  //   this.router.navigateByUrl('/login');
  // }


}
