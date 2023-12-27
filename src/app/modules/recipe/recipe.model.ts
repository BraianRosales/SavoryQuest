export interface FullRecipeReponse {
  meals: FullRecipe[];
}

export interface FullRecipeStatic {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strSource: string;
  strImageSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: Date | null;
}

// Defines an interface for the entire object, including dynamic properties.
export interface FullRecipe extends FullRecipeStatic {
  ingredients: string[]; // Array for ingredients.
  measures: string[]; // Array for measures.
}
