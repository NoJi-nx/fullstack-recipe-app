import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipeApiModule } from './RecipeComponents/recipe/recipe-api.module';
import { RecipeAuthModule } from './recipe-auth/recipe-auth.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
   ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RecipeApiModule,
    RecipeAuthModule,
    FontAwesomeModule,
    ReactiveFormsModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

