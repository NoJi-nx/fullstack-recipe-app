import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RecipeListRoutingModule } from './recipe-list-routing.module';
import { RecipeItemComponent } from '../recipe-item/recipe-item.component';
import { RecipeAllComponent } from '../recipe-all/recipe-all.component';
import { RecipeListComponent } from './recipe-list.component';



@NgModule({
  declarations: [
    RecipeItemComponent,
    RecipeAllComponent,
    RecipeListComponent
  ],
  imports: [
    CommonModule,
    RecipeListRoutingModule,
    FontAwesomeModule
  ]
})
export class RecipeListModule { }
