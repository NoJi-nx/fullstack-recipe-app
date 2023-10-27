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

  // Register a new user
  register(user: User): Observable<any> {
    let api = `${this.endPoint}/register`;
  return this.http.post(api, user).pipe(

    catchError((error) => {
     console.error('Error during registration:', error);
     return throwError(() => new Error(error)); // Re-throw the error to handle it in the component
    })
  );
}

  // Log in a user
 loggedIn(user: User) {
    return this.http
      .post<any>(`${this.endPoint}/login`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token);
        localStorage.setItem('id', res.user.id);
        localStorage.setItem('name', res.user.name);
        localStorage.setItem('password', res.user.password);
        localStorage.setItem('email', res.user.email);
          this.currentUser = res;
          this.router.navigate([`user-dashboard`]);

        });
  }

  // Get the access token from local storage
  getToken() {
    return localStorage.getItem('access_token');
  }

  // Get the user ID from local storage
  getUserId() {
    return localStorage.getItem('id');
  }

   // Check if the user is logged in
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  // Log out the user
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }

  // Get a list of recipes by list ID
  getRecipeList(listId: any): Observable<any>{
    let api = `${this.endPoint}/recipelist/${listId}`;
    return this.http.get<Recipe[]>(api, {headers: this.headers})
    .pipe(catchError(this.handleError));
  }


// Delete a recipe list by recipe ID
  deleteRecipeList(recipeId:any): Observable<any> {
    let api = `${this.endPoint}/recipelist-delete/${recipeId}`;
     return this.http.delete(api)
       .pipe(catchError(this.handleError));
  }

   // Get user lists by user ID
  getUserLists(id: any): Observable<any> {
    let api = `${this.endPoint}/lists/${id}`;
    let headersWithToken = this.headers.set('Authorization', `Bearer ${this.getToken()}`);
    let token = this.getToken();
    //let headersToken = {'Authorization': `Bearer ${token}`};
    console.log(headersWithToken);
    return this.http
    .get<RecipeList[]>(api, { headers: headersWithToken })
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
