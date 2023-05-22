import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../model/recipe';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit{
  closeResult!: string;

  @Input() recipe!: Recipe;

  faHeart = faHeart;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openLg(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }
}
