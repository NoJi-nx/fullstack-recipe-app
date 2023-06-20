import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../model/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeApiService {
  apiUrl = 'http://localhost:4200/recipes';
  apiEdamam = 'https://api.edamam.com/api/recipes/v2';
  appId = 'e2862b60';
  appKey = 'fbb3e4a9d3a9fdce2d9901c90197b39f';
  recipes: Recipe[] = [];

  constructor(private http: HttpClient) {}

  getRecipeAll(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl);
  }

  getRandomRecipe(): Observable<object> {
    return this.http.get(
      `${this.apiEdamam}/random?apiKey=${this.appKey}&number=2`
    );
  }

  getRecipeById(recipeId: string): Observable<Recipe> {
    return this.http.get<Recipe>(
      `${this.apiEdamam}/${recipeId}/information?apiKey=${this.appKey}`
    );
  }

  getRecipeByIdTest(recipeId: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/${recipeId}`);
  }
}
