import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeAuthService } from '../recipe-auth.service';

@Component({
  selector: 'app-recipe-login',
  templateUrl: './recipe-login.component.html',
  styleUrls: ['./recipe-login.component.css']
})
export class RecipeLoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: RecipeAuthService,
    public router: Router
  ) {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit(): void {}
      loginUser() {
        this.authService.loggedIn(this.loginForm.value);
      }
    }
