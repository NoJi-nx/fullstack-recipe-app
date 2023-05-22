import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RecipeListRoutingModule } from './recipe-list-routing.module';
import { RecipeItemComponent } from '../recipe-item/recipe-item.component';
import { RecipeAllComponent } from '../recipe-all/recipe-all.component';



@NgModule({
  declarations: [
    RecipeItemComponent,
    RecipeAllComponent
  ],
  imports: [
    CommonModule,
    RecipeListRoutingModule
  ]
})
export class RecipeListModule { }
