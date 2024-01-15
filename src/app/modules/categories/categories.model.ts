import { Recipe } from 'src/app/shared/shared.interfaces';

export interface CategoriesResponse {
  categories: Category[];
}

export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface CategoryRecipes {
  meals: Recipe[];
}
