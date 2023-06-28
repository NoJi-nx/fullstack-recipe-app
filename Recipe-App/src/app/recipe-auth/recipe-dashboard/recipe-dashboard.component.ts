import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeAuthService } from '../recipe-auth.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RecipeList } from 'src/app/model/recipe-list';
import { RecipeListsService } from 'src/app/RecipeComponents/recipe/recipe-lists.service';
import { Recipe } from 'src/app/model/recipe';

@Component({
  selector: 'app-recipe-dashboard',
  templateUrl: './recipe-dashboard.component.html',
  styleUrls: ['./recipe-dashboard.component.css']
})
export class RecipeDashboardComponent implements OnInit {
  currentUser: any = {};

  lists: RecipeList[] = [];
  recipes: Recipe[] = [];

  userName!: string;
  userEmail!: string;

  form!: FormGroup;

  recipeListClick: boolean = false;

  constructor(public authService: RecipeAuthService, private actRoute: ActivatedRoute,
    private fb: FormBuilder, private recipeListService: RecipeListsService)
  {
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

  deleteList(listId: number) {
    console.log(listId);
    this.recipeListService.deleteList(listId).subscribe((res: any) => {
      console.log(res);
      this.lists = this.lists.filter((l) => l.id !== listId);
    });
  }

  createRecipeList(): void {
    const title = this.form.getRawValue();
    this.recipeListService
      .createList(title)
      .subscribe((list) => this.lists.push(list));
  }

  onRecipeClicked(id: any) {}

  deleteRecipe(recipeId: any) {
    this.authService.deleteRecipeList(recipeId).subscribe(() => {
      this.recipes = this.recipes.filter((r) => r.id !== recipeId);
    });
  }

  clickRecipeList(id: any) {
    this.recipeListClick = !this.recipeListClick;
    console.log(id);
    this.authService.getRecipeList(id).subscribe((res: Recipe[]) => {
      this.recipes = Object.keys(res).map((k: any) => res[k]);
    })
  }

  logout() {
    this.authService.doLogout();
  }
}
