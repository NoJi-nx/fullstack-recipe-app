import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecipeAuthService } from './recipe-auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: RecipeAuthService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler) {
    const authToken = this.authService.getToken();
    req = req.clone({
      setHeaders: {
        Authorization: 'User' + authToken,
      }
    });
    return next.handle(req);
  }
}
