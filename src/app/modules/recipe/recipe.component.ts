import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { RecipeService } from './recipe.service';
import { FullRecipe, FullRecipeReponse } from './recipe.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FavoriteRecipesService } from 'src/app/core/services/favorite-recipes.service';
import { Recipe } from 'src/app/shared/shared.interfaces';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
  fullRecipe!: FullRecipe;
  tags: string[] = [];
  favoriteIcon: string = 'favorite_border';
  instructions: string[] = [];
  videoYt: string = '';
  isSmallScreen: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    public spinnerService: SpinnerService,
    private recipeService: RecipeService,
    private sanitizer: DomSanitizer,
    private snackBar: MatSnackBar,
    private favoriteRecipesService: FavoriteRecipesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.detectScreenSize();

    const recipesIds: string[] = this.favoriteRecipesService
      .getFavoriteRecipes()
      .map((r: Recipe) => r.idMeal);

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
          this.videoYt = fullRecipe.strYoutube;
          const instructionsArray = this.fullRecipe.strInstructions.split('.');
          // Remove empty elements from the array
          const nonEmptyInstructions = instructionsArray.filter(
            (instruction) => {
              return instruction.trim() !== '';
            }
          );
          // Remove the last element from the array (final point)
          nonEmptyInstructions.pop();
          // Store the result in the variable this.instructions
          this.instructions = nonEmptyInstructions;
          if (this.fullRecipe.strTags) {
            this.tags = this.fullRecipe.strTags.split(',');
          } else {
            this.tags = [];
          }

          if (recipesIds.includes(this.fullRecipe.idMeal)) {
            this.favoriteIcon = 'favorite';
          } else {
            this.favoriteIcon = 'favorite_border';
          }
        });
    });
  }

  getSafeVideoUrl(url: string): SafeResourceUrl {
    // Regular expression to extract video ID from YouTube URL
    const regex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;

    // Regular expression matches
    const matches = url.match(regex);

    // If there are matches, build the secure URL
    if (matches) {
      const videoId = matches[1];
      const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${videoId}`
      );
      return safeUrl;
    } else {
      return this.sanitizer.bypassSecurityTrustResourceUrl('about:blank');
    }
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

  addToFavorites(recipe: Recipe) {
    if (this.favoriteIcon === 'favorite_border') {
      this.favoriteIcon = 'favorite';
      this.favoriteRecipesService.saveRecipe(recipe);
      this.snackBar.open('Saved in favorites!', 'Close', {
        duration: 3000,
        panelClass: 'snackbar-succefully',
      });
    } else {
      this.favoriteIcon = 'favorite_border';
      this.favoriteRecipesService.deleteRecipe(recipe.idMeal);
      this.snackBar.open('It was removed from favorites!', 'Close', {
        duration: 3000,
        panelClass: 'snackbar-delete',
      });
    }
  }

  redirectToDetail(name: string) {
    this.router.navigate([`categories/${name}`]);
  }

  private detectScreenSize() {
    this.isSmallScreen = window.innerWidth <= 600;
  }
}
