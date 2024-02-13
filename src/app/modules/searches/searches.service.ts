import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AreasResponse } from './searches.interfaces';
import { FullRecipeReponse } from '../recipe/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class SearchesService {
  constructor(private http: HttpClient) {}

  getAllAreas() {
    return this.http.get<AreasResponse>(
      'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
    );
  }

  searchByName(foodName: string) {
    return this.http.get<FullRecipeReponse>(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`
    );
  }

  searchByArea(areaName: string) {
    return this.http.get<FullRecipeReponse>(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`
    );
  }

  searchByIngredient(ingredientName: string) {
    return this.http.get<FullRecipeReponse>(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientName}`
    );
  }
}
