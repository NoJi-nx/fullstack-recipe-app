import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeAuthService } from '../recipe-auth.service';

@Component({
  selector: 'app-recipe-login',
  templateUrl: './recipe-login.component.html', // HTML template for the component
  styleUrls: ['./recipe-login.component.css'], // Styles (CSS) for the component
})
export class RecipeLoginComponent implements OnInit {
  loginForm: FormGroup; // Form group for user login

  constructor(
    public fb: FormBuilder, // Form builder for creating the login form
    public authService: RecipeAuthService, // Authentication service for user login
    public router: Router // Angular router for navigation
  ) {
    // Initialize the login form with form controls for email and password
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit(): void {
    // Initialization code, executed when the component is initialized
  }

  // Handle user login
  loginUser() {
    this.authService.loggedIn(this.loginForm.value); // Call the authService method to log in the user
  }
}
