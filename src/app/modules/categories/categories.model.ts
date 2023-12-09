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

export interface Recipe {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}
