import { Component, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RecipeApiService } from '../../recipe-api.service';
import { Recipe } from 'src/app/model/recipe';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent {
  form!: FormGroup;
  showSearch: boolean = false;
  @Input() recipes: Recipe[] = [] ;

  diets:string[]=['Gluten free','Vegetarian', 'Vegan'];
  dishTypes:string[]=['Breakfast','Dessert','Main course'];

  constructor(private fb: FormBuilder, private recipeApi: RecipeApiService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      query: '',
      diet:'',
      dishType:'',
    });
  }

  searchRecipe(): void {
    const formInput = this.form.getRawValue();
    let query = formInput.query;
    let diet = formInput.diet;
    let dishTypes = formInput.dishType;
    console.log(this.form.getRawValue());

    this.recipeApi.searchRecipe(query,diet,dishTypes).subscribe((res: any) => {
      this.recipes = res.results;
      this.showSearch = true;

    });
  }
}
