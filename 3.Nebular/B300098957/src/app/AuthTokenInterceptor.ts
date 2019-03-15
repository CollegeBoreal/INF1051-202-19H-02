import { Inject, Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {
  NB_AUTH_INTERCEPTOR_HEADER, NB_AUTH_TOKEN_INTERCEPTOR_FILTER, NbAuthJWTToken, NbAuthService,
  NbAuthToken
} from '@nebular/auth';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor(private injector: Injector,
              @Inject(NB_AUTH_TOKEN_INTERCEPTOR_FILTER) protected filter,
              @Inject(NB_AUTH_INTERCEPTOR_HEADER) protected headerName: string = 'Authorization') {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return this.authService.getToken()
      .pipe(
        switchMap((token: NbAuthJWTToken) => {
          if (token && token.getValue()) {
            req = req.clone({
              setHeaders: {
                [this.headerName]: token.getValue(),
              },
            });
          }
          return next.handle(req);
        }),
      );
  }

  protected get authService(): NbAuthService {
    return this.injector.get(NbAuthService);
  }

}
