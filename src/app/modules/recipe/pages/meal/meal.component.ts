import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { RecipeService } from '../../recipe.service';
import { FullRecipeReponse } from '../../recipe.model';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss'],
})
export class MealComponent implements OnInit {
  name: any;
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
          this.name = fullRecipeReponse.meals[0].strMeal;
        });
    });
  }
}
