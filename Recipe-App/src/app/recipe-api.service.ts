import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './model/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeApiService {
  private apiUrl = 'http://localhost:4200/recipes'

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl);
  }
}
