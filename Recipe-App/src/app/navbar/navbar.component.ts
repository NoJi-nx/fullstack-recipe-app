import { Component, OnInit } from '@angular/core';
import { RecipeAuthService } from '../recipe-auth/recipe-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: RecipeAuthService) {}

  logout() {
    this.authService.doLogout();
  }

  ngOnInit(): void {
  }

}
