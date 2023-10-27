import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeAuthService } from '../recipe-auth.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RecipeList } from 'src/app/model/recipe-list';
import { RecipeListsService } from 'src/app/RecipeComponents/recipe/recipe-lists.service';
import { Recipe } from 'src/app/model/recipe';

@Component({
  selector: 'app-recipe-dashboard',
  templateUrl: './recipe-dashboard.component.html', // HTML template for the component
  styleUrls: ['./recipe-dashboard.component.css'], // Styles (CSS) for the component
})
export class RecipeDashboardComponent implements OnInit {
  currentUser: any = {}; // Placeholder for the current user's information

  lists: RecipeList[] = []; // Array to store user's recipe lists
  recipes: Recipe[] = []; // Array to store recipes

  userName!: string;
  userEmail!: string;

  form!: FormGroup; // Form group for creating recipe lists

  recipeListClick: boolean = false; // A flag to control the visibility of the recipe list

  constructor(
    public authService: RecipeAuthService, // Authentication service for user-related operations
    private actRoute: ActivatedRoute, // ActivatedRoute for getting route-related information
    private fb: FormBuilder, // Form builder for creating and managing forms
    private recipeListService: RecipeListsService // Service for handling recipe lists
  ) {
    let id = localStorage.getItem('id');
    this.authService.getUserLists(id).subscribe((res: RecipeList[]) => {
      this.lists = Object.keys(res).map((k: any) => res[k]);
      console.log(this.lists);
    });
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: '',
    });

    this.userName = localStorage.getItem('name') as string;
    this.userEmail = localStorage.getItem('email') as string;
    console.log(this.userEmail);
  }

  // Delete a recipe list by list ID
  deleteList(listId: number) {
    console.log(listId);
    this.recipeListService.deleteList(listId).subscribe((res: any) => {
      console.log(res);
      this.lists = this.lists.filter((l) => l.id !== listId);
    });
  }

  // Create a new recipe list
  createRecipeList(): void {
    const title = this.form.getRawValue();
    this.recipeListService.createList(title).subscribe((list) => this.lists.push(list));

  }

  // Handle when a recipe is clicked
  onRecipeClicked(id: any) {
    // Implement functionality when a recipe is clicked
  }

  // Delete a recipe by recipe ID
  deleteRecipe(recipeId: number) {
    this.authService.deleteRecipeList(recipeId).subscribe(() => {
      this.recipes = this.recipes.filter((r) => r.id !== recipeId);
    });
  }

  // Handle the click event for a recipe list
  clickRecipeList(id: any) {
    this.recipeListClick = !this.recipeListClick;
    console.log(id);
    this.authService.getRecipeList(id).subscribe((res: Recipe[]) => {
      this.recipes = Object.keys(res).map((k: any) => res[k]);
    });
  }

  // Logout the user
  logout() {
    this.authService.doLogout();
  }
}
