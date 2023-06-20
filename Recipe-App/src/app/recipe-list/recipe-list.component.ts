import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeApiService } from '../recipe-api/recipe-api.service';
import { Recipe } from '../model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipe!: Recipe;

  recipeId!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesApiService: RecipeApiService
  ) {}

  ngOnInit(): void {
    this.recipeId = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.recipesApiService.getRecipeByIdTest(this.recipeId).subscribe((recipes) => {
      this.recipe = recipes;
    });
  }
}
