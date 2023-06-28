import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeAuthService } from '../recipe-auth.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RecipeList } from 'src/app/model/recipe-list';
import { RecipeListsService } from 'src/app/RecipeComponents/recipe/recipe-lists.service';

@Component({
  selector: 'app-recipe-dashboard',
  templateUrl: './recipe-dashboard.component.html',
  styleUrls: ['./recipe-dashboard.component.css']
})
export class RecipeDashboardComponent implements OnInit {
  currentUser: any = {};

  lists: RecipeList[] = [];

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

  createRecipeList(): void {
    const title = this.form.getRawValue();
    this.recipeListService.createList(title).subscribe((res: any) =>  {
      console.log(res);
    });
  }
  logout() {
    this.authService.doLogout();
  }
}
