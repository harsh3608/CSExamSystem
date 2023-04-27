import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthConfigInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,

  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    if (this.authService.isLoggedIn() && !this.authService.isRequestAuthorized()) {
      // redirect to login page
      this.authService.removeToken();
      this.router.navigate(['']);
      this.toastr.error('User Session Expired! Please, Login to continue !', 'Logged Out', {
        timeOut: 2000,
      });
    }

    const authToken = this.authService.getToken();
    request = request.clone({
      setHeaders: {
        Authorization: "Bearer " + authToken
      }
    });
    return next.handle(request);
    // return next.handle(request).pipe(
    //   // if (!this.authService.isRequestAuthorized()) {
    //   // // redirect to login page
    //   // this.authService.removeToken();
    //   // this.router.navigate(['']);
    //   // this.toastr.error('User Session Expired! Please, Login to continue !', 'Logged Out', {
    //   //   timeOut: 2000,
    //   // });

    //   catchError((error) => {
    //     if (error.status === 0) {
    //       // redirect to login page
    //       this.authService.removeToken();
    //       this.router.navigate(['']);
    //       this.toastr.error('User Session Expired! Please, Login to continue !', 'Logged Out', {
    //         timeOut: 2000,
    //       });
    //     }
    //     return throwError(error);
    //   })

    // );

  }
}
