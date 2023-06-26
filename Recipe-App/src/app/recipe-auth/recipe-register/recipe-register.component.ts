import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeAuthService } from '../recipe-auth.service';

@Component({
  selector: 'app-recipe-register',
  templateUrl: './recipe-register.component.html',
  styleUrls: ['./recipe-register.component.css']
})
export class RecipeRegisterComponent implements OnInit {
  registerForm: FormGroup

  constructor(
    public fb: FormBuilder,
    public authService: RecipeAuthService,
    public router: Router,
  ) {
    this.registerForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      confirm_password: [''],
    });
  }

  ngOnInit(): void {}
  registerUser() {
    this.authService.register(this.registerForm.value).subscribe((res) =>{
      if (res.result) {
        this.registerForm.reset();
        this.router.navigate(['login']);
      }
    })
  }

}
