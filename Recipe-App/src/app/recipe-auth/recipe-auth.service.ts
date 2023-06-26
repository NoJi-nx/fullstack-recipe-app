import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecipeLoginComponent } from './recipe-login/recipe-login.component';

@Injectable({
  providedIn: 'root'
})
export class RecipeAuthService {
  private recipeLoginUrl = 'localhost:4200/api/login';

  constructor(private http: HttpClient) {}


  login(user: any){
    return this.http.post<any>(this.recipeLoginUrl, user);
  }
}
