export interface FullRecipeReponse {
  meals: FullRecipe[];
}

export interface FullRecipe {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string[] | null;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  // ... (continúa con el resto de los ingredientes)
  strMeasure1: string;
  strMeasure2: string;
  // ... (continúa con el resto de las medidas)
  strSource: string;
  strImageSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: Date | null;
}
