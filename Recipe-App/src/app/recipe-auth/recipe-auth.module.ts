import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeLoginComponent } from './recipe-login/recipe-login.component';
import { RecipeRegisterComponent } from './recipe-register/recipe-register.component';
import { RecipeLogoutComponent } from './recipe-logout/recipe-logout.component';
import { RecipeDeletePassComponent } from './recipe-delete-pass/recipe-delete-pass.component';
import { RecipePassForgotComponent } from './recipe-pass-forgot/recipe-pass-forgot.component';
import { RecipeDashboardComponent } from './recipe-dashboard/recipe-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RecipeAuthRoutingModule } from './recipe-auth-routing.module';
import { AuthInterceptor } from './auth.interceptor';



@NgModule({
  declarations: [
    RecipeLoginComponent,
    RecipeRegisterComponent,
    RecipeLogoutComponent,
    RecipeDeletePassComponent,
    RecipePassForgotComponent,
    RecipeDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipeAuthRoutingModule
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})

export class RecipeAuthModule { }
