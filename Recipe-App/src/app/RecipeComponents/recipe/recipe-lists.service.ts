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

  headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private http: HttpClient, public router: Router) { }

  getRecipesFromList(listId: number): Observable<Recipe[]> {
    let api = `${this.endPoint}/recipelist/${listId}`;
    return this.http.get<Recipe[]>(api);
  }

  addRecipeToList(listId: number, recipeTitle: string) {
    let api = `${this.endPoint}/recipelist-add/${listId}`;
    return this.http.post<Recipe>(api, recipeTitle);
  }

  deleteRecipeFromList(id: number) {
    let api = `${this.endPoint}/recipelist-delete/${id}`;
    return this.http.post(api, null);
  }

  createList(title: string): Observable<RecipeList> {
    let api = `${this.endPoint}/list-create/${localStorage.getItem('id')}`;
    return this.http.post<RecipeList>(api, title);
  }

  deleteList(listId: number) {
    let api = `${this.endPoint}/list-delete/${listId}`;
    return this.http.get(api);
  }
}
