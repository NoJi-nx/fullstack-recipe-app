import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, } from '@angular/common/http';
import { catchError, Observable, throwError, map } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './user';
import { RecipeList } from '../model/recipe-list';
import { Recipe } from '../model/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeAuthService {
  endPoint: string = 'http://localhost:8000/api';

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(private http: HttpClient, public router: Router) {}

  register(user: User): Observable<any> {
    let api = `${this.endPoint}/register`;
    return this.http.post(api, user).pipe(catchError(this.handleError));
  }

 loggedIn(user: User) {
    return this.http
      .post<any>(`${this.endPoint}/login`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token);
        localStorage.setItem('id', res.user.id);
        localStorage.setItem('name', res.user.name);
        localStorage.setItem('email', res.user.email);
          this.currentUser = res;
          this.router.navigate([`user-dashboard`]);
           /*  this.getUserProfile(res.user.id).subscribe((res) => {
          this.currentUser = res;
          this.router.navigate([`user-dashboard/${res.user.id}`]);
        });  */
        });
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  getUserId() {
    return localStorage.getItem('id');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }

  getRecipeList(listId: any): Observable<any>{
    let api = `${this.endPoint}/recipelist/${listId}`;
    return this.http.get<Recipe[]>(api, {headers: this.headers})
    .pipe(catchError(this.handleError));
  }

  deleteRecipeList(recipeId:any): Observable<any> {
    let api = `${this.endPoint}/recipelist-delete/${recipeId}`;
     return this.http.delete(api)
       .pipe(catchError(this.handleError));
  }

  // profil

  getUserLists(id: any): Observable<any> {
    let api = `${this.endPoint}/lists/${id}`;
    return this.http
    .get<RecipeList[]>(api, { headers: this.headers })
      .pipe(catchError(this.handleError));
  }

  // Error handling
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // klient
      msg = error.error.message;
    } else {
      // server
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
