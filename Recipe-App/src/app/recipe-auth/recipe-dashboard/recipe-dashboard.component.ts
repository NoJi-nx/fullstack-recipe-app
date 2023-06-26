import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeAuthService } from '../recipe-auth.service';
import { RecipeList } from 'src/app/model/recipe-list';

@Component({
  selector: 'app-recipe-dashboard',
  templateUrl: './recipe-dashboard.component.html',
  styleUrls: ['./recipe-dashboard.component.css']
})
export class RecipeDashboardComponent implements OnInit {
  currentUser: any = {};

  lists: RecipeList[] = [];

  userName!: string;
  userEmail!: string;

  constructor(public authService: RecipeAuthService, private actRoute: ActivatedRoute)
  {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.authService.getUserLists(id).subscribe((res: RecipeList[]) => {
      this.lists = Object.keys(res).map((k: any) => res[k]);
      console.log(this.lists);
    });
   }

   ngOnInit(): void {
    this.userName = localStorage.getItem('name') as string;
    this.userEmail = localStorage.getItem('email') as string;
    console.log(this.userEmail);
  }

  logout() {
    this.authService.doLogout();
  }
}
