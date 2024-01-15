import { Component, OnInit } from '@angular/core';
import { FavoriteRecipesService } from 'src/app/core/services/favorite-recipes.service';
import { Recipe } from 'src/app/shared/shared.interfaces';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favorites: Recipe[] = [];

  constructor(private favoriteRecipesService: FavoriteRecipesService) {}

  ngOnInit(): void {
    this.getfavorites();
  }

  deleteRecipes() {
    this.favoriteRecipesService.deleteAllRecipes();
    this.getfavorites();
  }

  getfavorites() {
    this.favorites = this.favoriteRecipesService.getFavoriteRecipes();
  }
}
