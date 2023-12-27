import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { RecipeService } from './recipe.service';
import { FullRecipe, FullRecipeReponse } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
  fullRecipe!: FullRecipe;
  tags: string[] | undefined;
  favoriteIcon: string = 'favorite_border';
  ingredientsArray: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    public spinnerService: SpinnerService,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.recipeService
        .getFullRecipeById(id)
        .subscribe((fullRecipeReponse: FullRecipeReponse) => {
          const meal = fullRecipeReponse.meals[0];

          const ingredients = this.createIngredients(meal);
          const measures = this.createMeasures(meal);

          const fullRecipe: FullRecipe = {
            ...meal,
            ingredients,
            measures,
          };

          this.fullRecipe = fullRecipe;
          this.tags = this.fullRecipe.strTags.split(',');
        });
    });
  }

  createIngredients(meal: any): string[] {
    const ingredients: string[] = [];
    Object.keys(meal).forEach((key) => {
      if (key.startsWith('strIngredient') && meal[key]) {
        ingredients.push(meal[key]);
      }
    });
    return ingredients;
  }

  createMeasures(meal: any): string[] {
    const measures: string[] = [];
    Object.keys(meal).forEach((key) => {
      if (key.startsWith('strMeasure') && meal[key]) {
        measures.push(meal[key]);
      }
    });
    return measures;
  }

  addToFavorites() {
    this.favoriteIcon === 'favorite_border'
      ? (this.favoriteIcon = 'favorite')
      : (this.favoriteIcon = 'favorite_border');
  }
}
