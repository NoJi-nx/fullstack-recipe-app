import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeAuthService } from '../recipe-auth.service';

@Component({
  selector: 'app-recipe-dashboard',
  templateUrl: './recipe-dashboard.component.html',
  styleUrls: ['./recipe-dashboard.component.css']
})
export class RecipeDashboardComponent implements OnInit {
  currentUser: any = {};
  constructor(public authService: RecipeAuthService, private actRoute: ActivatedRoute)
  {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.authService.getUserProfile(id).subscribe((res) => {
      this.currentUser = res.user;
    });
   }

  ngOnInit(): void {}

  logout() {
    this.authService.doLogout();
  }
}
