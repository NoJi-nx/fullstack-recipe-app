import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../../model/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeApiService {
  apiUrl = 'https://u06-fullstack-recipe-app-nrice31-production.up.railway.app/recipes';
  apiSpoon = 'https://api.spoonacular.com/recipes';
  apiKey = '1563e3ed8d134929a2184d0aba83af65';
  recipes: Recipe[] = [];

  constructor(private http: HttpClient) {}

  getRecipeAll(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl);
  }

  getRandomRecipe(): Observable<object> {
    return this.http.get(
      `${this.apiSpoon}/random?apiKey=${this.apiKey}&number=6`
    );
  }

  getRecipeById(recipeId: string): Observable<Recipe> {
    return this.http.get<Recipe>(
      `${this.apiSpoon}/${recipeId}/information?apiKey=${this.apiKey}`
    );
  }

  getRecipeByIdTest(recipeId: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/${recipeId}`);
  }

  searchRecipe(query: any, diet: any, dishType: any): Observable<object> {
    return this.http.get(
      `${this.apiSpoon}/complexSearch?apiKey=${this.apiKey}&query=${query}&diet=${diet}&type=${dishType}`
    );
  }
}
