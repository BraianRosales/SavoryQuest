import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { RecipeService } from './recipe.service';
import { FullRecipe, FullRecipeReponse } from './recipe.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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

  constructor(
    private activatedRoute: ActivatedRoute,
    public spinnerService: SpinnerService,
    private recipeService: RecipeService,
    private sanitizer: DomSanitizer
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

  addToFavorites() {
    this.favoriteIcon === 'favorite_border'
      ? (this.favoriteIcon = 'favorite')
      : (this.favoriteIcon = 'favorite_border');
  }
}
