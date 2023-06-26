import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RecipeAuthService } from '../recipe-auth.service';

@Component({
  selector: 'app-recipe-login',
  templateUrl: './recipe-login.component.html',
  styleUrls: ['./recipe-login.component.css']
})
export class RecipeLoginComponent implements OnInit {
  loginUserInfo = {};

  constructor(private auth: RecipeAuthService) {
  }

  ngOnInit(): void {}
      loginUser() {
        this.auth.login(this.loginUserInfo).subscribe(
          (res) => console.log(res),
          (err) => console.log(err)
        );
      }
    }
