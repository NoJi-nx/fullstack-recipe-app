import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipeLoginComponent } from './recipe-login/recipe-login.component';
import { RecipeRegisterComponent } from './recipe-register/recipe-register.component';
import { RecipeLogoutComponent } from './recipe-logout/recipe-logout.component';
import { RecipeDeletePassComponent } from './recipe-delete-pass/recipe-delete-pass.component';
import { RecipePassForgotComponent } from './recipe-pass-forgot/recipe-pass-forgot.component';
import { RecipeDashboardComponent } from './recipe-dashboard/recipe-dashboard.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: 'login', component: RecipeLoginComponent },
  { path: 'register', component: RecipeRegisterComponent },
  { path: 'user-dashboard/:id', component: RecipeDashboardComponent, canActivate: [AuthGuard]}
  /*{ path: 'logout', component: RecipeLogoutComponent },
  { path: 'password-forgot', component: RecipePassForgotComponent },
  { path: 'delete-password', component: RecipeDeletePassComponent },
  { path: 'dashboard', component: RecipeDashboardComponent },*/
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class RecipeAuthRoutingModule { }
