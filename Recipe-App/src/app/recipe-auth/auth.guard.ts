import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeAuthService } from './recipe-auth.service';

@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate  {

  constructor(public authService: RecipeAuthService, public router: Router) {}

 // Implement the CanActivate interface
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>| Promise<boolean> | boolean {
    // Check if the user is authenticated using authService
    if (this.authService.isLoggedIn !== true) { // Display an alert message
      window.alert('Denied');
      this.router.navigate(['login']); // Redirect to the login page
    }
    return true; // Return true if the user is authenticated, allowing access to the route
  }
};
