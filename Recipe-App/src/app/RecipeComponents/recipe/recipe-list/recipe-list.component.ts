import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeApiService } from '../recipe-api.service';
import { Recipe } from '../../../model/recipe';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faPlateWheat } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { RecipeListsService } from '../recipe-lists.service';
import { RecipeAuthService } from 'src/app/recipe-auth/recipe-auth.service';
import { RecipeList } from 'src/app/model/recipe-list';

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

  recipeId: any;
  lists: RecipeList[] = [];

  constructor(
    public authService: RecipeAuthService,
    private activatedRoute: ActivatedRoute,
    private recipesApiService: RecipeApiService,
    private recipeListService: RecipeListsService
  ) {}



  ngOnInit(): void {
    this.recipeId = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.recipesApiService.getRecipeById(this.recipeId).subscribe((recipes) => {
      this.recipe = recipes;
    });
  }

  addRecipe(
    listId: number,
    recipeId: number,
    recipeTitle: string,
    recipeImage: string,
  ) {
    const recipeInfo = {
      recipeId: recipeId,
      recipeName: recipeTitle,
      image: recipeImage,
    };

    this.recipeListService
      .addRecipeToList(listId, recipeInfo) // Pass the recipeInfo object directly
      .subscribe((res: any) => {
        console.log('Saved');
      });
  }

  }
