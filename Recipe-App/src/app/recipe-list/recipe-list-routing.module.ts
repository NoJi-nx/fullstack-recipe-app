import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeAllComponent } from '../recipe-all/recipe-all.component';

const routes: Routes = [{ path: '', component: RecipeAllComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeListRoutingModule { }
