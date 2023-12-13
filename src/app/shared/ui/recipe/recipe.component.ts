import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/modules/categories/categories.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
  @Input() recipe!: Recipe;
  favoriteIcon: string = 'favorite_border';

  constructor() {}

  ngOnInit(): void {}

  addToFavorites() {
    this.favoriteIcon === 'favorite_border'
      ? (this.favoriteIcon = 'favorite')
      : (this.favoriteIcon = 'favorite_border');
  }
}
