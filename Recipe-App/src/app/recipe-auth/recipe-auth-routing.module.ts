import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipeLoginComponent } from './recipe-login/recipe-login.component';
import { RecipeRegisterComponent } from './recipe-register/recipe-register.component';
import { RecipeLogoutComponent } from './recipe-logout/recipe-logout.component';
import { RecipeDeletePassComponent } from './recipe-delete-pass/recipe-delete-pass.component';
import { RecipePassForgotComponent } from './recipe-pass-forgot/recipe-pass-forgot.component';
import { RecipeDashboardComponent } from './recipe-dashboard/recipe-dashboard.component';

const routes: Routes = [
  { path: 'login', component: RecipeLoginComponent },
  { path: 'register', component: RecipeRegisterComponent },
  { path: 'logout', component: RecipeLogoutComponent },
  { path: 'forgot-password', component: RecipePassForgotComponent },
  { path: 'reset-password', component: RecipeDeletePassComponent },
  { path: 'dashboard', component: RecipeDashboardComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class RecipeAuthRoutingModule { }
