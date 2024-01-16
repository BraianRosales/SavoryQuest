import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Recipe } from '../../shared.interfaces';
import { FavoriteRecipesService } from 'src/app/core/services/favorite-recipes.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Output() imgClick: EventEmitter<string> = new EventEmitter<string>();
  @Output() handleAddOrDelete: EventEmitter<string> =
    new EventEmitter<string>();

  favoriteIcon: string = 'favorite_border';

  constructor(
    private snackBar: MatSnackBar,
    private favoriteRecipesService: FavoriteRecipesService
  ) {}

  ngOnInit(): void {
    const recipesIds: string[] = this.favoriteRecipesService
      .getFavoriteRecipes()
      .map((r: Recipe) => r.idMeal);

    if (recipesIds.includes(this.recipe.idMeal)) {
      this.favoriteIcon = 'favorite';
    } else {
      this.favoriteIcon = 'favorite_border';
    }
  }

  addToFavorites(recipe: Recipe) {
    if (this.favoriteIcon === 'favorite_border') {
      this.favoriteIcon = 'favorite';
      this.favoriteRecipesService.saveRecipe(recipe);
      this.snackBar.open('Saved in favorites!', 'Close', {
        duration: 3000,
        panelClass: 'snackbar-succefully',
      });
      this.handleAddOrDelete.emit('add');
    } else {
      this.favoriteIcon = 'favorite_border';
      this.favoriteRecipesService.deleteRecipe(recipe.idMeal);
      this.snackBar.open('It was removed from favorites!', 'Close', {
        duration: 3000,
        panelClass: 'snackbar-delete',
      });
      this.handleAddOrDelete.emit('removed');
    }
  }

  seeDetail(id: string) {
    this.imgClick.next(id);
  }
}
