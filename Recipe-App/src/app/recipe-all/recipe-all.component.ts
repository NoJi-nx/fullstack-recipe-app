import { Component } from '@angular/core';
import { Recipe } from '../model/recipe';
import { RecipeApiService } from '../recipe-api.service';

@Component({
  selector: 'app-recipe-all',
  templateUrl: './recipe-all.component.html',
  styleUrls: ['./recipe-all.component.css']
})
export class RecipeAllComponent {
  recipes: Recipe[] = [];

  constructor(private allRecipeApi: RecipeApiService) { }

  ngOnInit(): void {
    this.allRecipeApi
    .getRecipes()
    .subscribe((recipes) => (this.recipes = recipes));
  }

}
