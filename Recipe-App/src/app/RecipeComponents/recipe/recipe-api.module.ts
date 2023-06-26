import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeApiRoutingModule } from './recipe-api-routing.module';
import { RecipeAllComponent } from './recipe-all/recipe-all.component'
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    RecipeItemComponent,
    RecipeAllComponent,
    RecipeListComponent
  ],
  imports: [
    CommonModule,
    RecipeApiRoutingModule,
    FontAwesomeModule,
    NgbModule,
  ],
})
export class RecipeApiModule { }
