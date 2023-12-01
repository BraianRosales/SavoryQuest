export interface CategoriesResponse {
  categories: Category[];
}

export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface CategoryMeals {
  meals: Meal[];
}

export interface Meal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}
