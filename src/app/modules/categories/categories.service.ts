import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriesResponse, CategoryRecipes } from './categories.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get<CategoriesResponse>(
      'https://www.themealdb.com/api/json/v1/1/categories.php'
    );
  }

  getCategoryByName(name: string) {
    return this.http.get<CategoryRecipes>(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
    );
  }
}
