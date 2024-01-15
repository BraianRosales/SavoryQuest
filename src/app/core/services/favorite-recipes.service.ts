import { Injectable } from '@angular/core';
import { Recipe } from 'src/app/shared/shared.interfaces';

const FAVORITES_KEY = 'favorite_recipes';

@Injectable({
  providedIn: 'root',
})
export class FavoriteRecipesService {
  private recipes: Recipe[] = [];

  constructor() {
    const storedHistory = localStorage.getItem(FAVORITES_KEY);
    this.recipes = storedHistory ? JSON.parse(storedHistory) : [];
  }

  private saveRecipesToLocalStorage(): void {
    // Store current recipes in localStorage
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(this.recipes));
  }

  saveRecipe(recipe: Recipe): void {
    if (!this.recipes.some((r: Recipe) => recipe.idMeal === r.idMeal)) {
      this.recipes.push(recipe);
      this.saveRecipesToLocalStorage();
    }
  }

  getFavoriteRecipes(): Recipe[] {
    return [...this.recipes];
  }

  deleteRecipe(recipeIdToDelete: string): void {
    const newArray = this.recipes.filter(
      (r: Recipe) => r.idMeal !== recipeIdToDelete
    );
    this.recipes = newArray;
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(this.recipes));
  }

  deleteAllRecipes() {
    this.recipes = [];
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(this.recipes));
  }
}
