import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeAllComponent } from '../recipe-all/recipe-all.component'
import { RecipeListComponent } from '../recipe-list/recipe-list.component';

const routes: Routes = [
  { path: '', component: RecipeAllComponent },
  { path: '', component: RecipeListComponent},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeApiRoutingModule {}
