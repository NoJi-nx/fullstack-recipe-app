import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe';
import { RecipeApiService } from '../recipe-api/recipe-api.service';

@Component({
  selector: 'app-recipe-all',
  templateUrl: './recipe-all.component.html',
  styleUrls: ['./recipe-all.component.css']
})
export class RecipeAllComponent implements OnInit  {
  recipes: Recipe[] = [];

  constructor(private allRecipeApi: RecipeApiService) { }

  ngOnInit(): void {
    this.allRecipeApi
    .getRandomRecipe()
      .subscribe((res:any)=>{
        this.recipes = res.recipes.map((res:any)=>res);
      })
    }
}
