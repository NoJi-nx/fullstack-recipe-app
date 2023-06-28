import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeApiService } from '../recipe-api.service';
import { Recipe } from '../../../model/recipe';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faPlateWheat } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { RecipeListsService } from '../recipe-lists.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  faClock = faClock;
  faPlate = faPlateWheat;
  faUtensils = faUtensils;

  recipe!: Recipe;

  recipeId!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesApiService: RecipeApiService,
    private listsService: RecipeListsService
  ) {}

  ngOnInit(): void {
    this.recipeId = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.recipesApiService.getRecipeById(this.recipeId).subscribe((recipes) => {
      this.recipe = recipes;
    });
  }

  addRecipe(){

  }
}
