import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FullRecipeReponse } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  getFullRecipeById(id: string) {
    return this.http.get<FullRecipeReponse>(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
  }
}
