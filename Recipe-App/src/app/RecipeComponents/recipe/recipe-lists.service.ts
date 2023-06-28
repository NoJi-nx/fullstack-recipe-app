import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders,
} from '@angular/common/http';
import { catchError, Observable, throwError, map } from 'rxjs';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { RecipeList } from 'src/app/model/recipe-list';
import { Recipe } from 'src/app/model/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeListsService {
  endPoint: string = 'http://localhost:8000/api';


  httpSettings = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // klient
      msg = error.error.message;
    } else {
      // server
      msg = `Error: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

  constructor(private http: HttpClient, public router: Router) { }

  getRecipesFromList(listId: number): Observable<Recipe[]> {
    let api = `${this.endPoint}/recipelist/${listId}`;
    return this.http.get<Recipe[]>(api);
  }

  addRecipeToList(listId: number, recipeInfo: object) {
    console.log(listId);
    console.log(recipeInfo);
    let api = `${this.endPoint}/recipelist-add/${listId}`;
    return this.http.post(api, JSON.stringify(recipeInfo), this.httpSettings)
    .pipe(catchError(this.handleError));
  }

  deleteRecipeFromList(id: number) {
    let api = `${this.endPoint}/recipelist-delete/${id}`;
    return this.http.post(api, null);
  }

  createList(title: object): Observable<RecipeList> {
    let api = `${this.endPoint}/list-create/${localStorage.getItem('id')}`;
    console.log(title);
    return this.http.post<RecipeList>(api, JSON.stringify(title), this.httpSettings);
  }

  deleteList(listId: number) {
    let api = `${this.endPoint}/list-delete/${listId}`;
    return this.http.delete(api);
  }
}
