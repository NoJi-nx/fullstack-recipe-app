import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeApiRoutingModule } from './recipe-api-routing.module';
import { RecipeAllComponent } from './recipe-all/recipe-all.component'
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeSearchComponent } from './recipe-all/recipe-search/recipe-search.component';




@NgModule({
  declarations: [
    RecipeItemComponent,
    RecipeAllComponent,
    RecipeListComponent,
    RecipeSearchComponent
  ],
  imports: [
    CommonModule,
    RecipeApiRoutingModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class RecipeApiModule {}
