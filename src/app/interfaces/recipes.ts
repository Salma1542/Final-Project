export interface IRecipe {
  id?: number|null | null,
  title?: string | null,
  course?: string | null,
  cuisine?: string | null,
  mainIngredient?: string | null,
  description?: string  | null,
  source?: string | null,
  url?: string | null,
  urlHost?: string | null,
  prepTime?: number | null,
  cookTime?: number | null,
  totalTime?: number | null,
  servings?: number | null,
  yield?: number | string | null,
  ingredients?: string | null,
  directions?: string | null,
  rating?: string | null,
  publicUrl?: string | null,
  photoUrl?: string | null,
  private?: string | null,
  nutritionalScoreGeneric?: string | null,
  calories?:number | string | null,
  fat?: string  | null,
  cholesterol?: string | null,
  sodium?: string | number | null,
  sugar?: string  | null,
  carbohydrate?: string | null,
  fiber?: string | null,
  protein?: string | null,
  cost?: string | null,
  tags?: string | null,
}
