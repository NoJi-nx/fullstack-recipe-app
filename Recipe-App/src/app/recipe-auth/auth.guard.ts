import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeAuthService } from './recipe-auth.service';

@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate  {

  constructor(public authService: RecipeAuthService, public router: Router) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>| Promise<boolean> | boolean {
    if (this.authService.isLoggedIn !== true) {
      window.alert('Denied');
      this.router.navigate(['login']);
    }
    return true;
  }
};
