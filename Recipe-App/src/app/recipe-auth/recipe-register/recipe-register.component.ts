import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeAuthService } from '../recipe-auth.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-recipe-register',
  templateUrl: './recipe-register.component.html', // HTML template for the component
  styleUrls: ['./recipe-register.component.css'], // Styles (CSS) for the component
})
export class RecipeRegisterComponent implements OnInit {
  registerForm: FormGroup; // A form group for user registration

  constructor(
    public fb: FormBuilder, // Form builder for creating the registration form
    public authService: RecipeAuthService, // Authentication service for user registration
    public router: Router, // Angular router for navigation
  ) {
    // Initialize the registration form with form controls
    this.registerForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      password_confirmation: [''],
    });
  }

  ngOnInit(): void {
    // Initialization code, executed when the component is initialized
  }

  // Handle user registration
  registerUser() {
    this.authService.register(this.registerForm.value).subscribe((res) => {

      console.log(res); // Log the response for debugging purposes
      console.log(res.token)
      if (res.token) {
        console.log('Registration successful'); // Log a success message
        localStorage.setItem('access_token', res.token);
        localStorage.setItem('id', res.user.id);
        localStorage.setItem('name', res.user.name);
        localStorage.setItem('password', res.user.password);
        localStorage.setItem('email', res.user.email);
        this.router.navigate(['user-dashboard']); // Redirect to the user dashboard upon successful registration
      }
    }, (error) => {
      console.log("Registration failed")
    }
    );
  }
}
