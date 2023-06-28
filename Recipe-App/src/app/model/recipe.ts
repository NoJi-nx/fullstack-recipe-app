export interface Recipe {
  id: number;
  recipe_id: number;
  name: string;
  title: string;
  readyInMinutes: number;
  servings: number;
  image: string;
  summary: string;
  dishType: string;
  diet: string;
  instructions: string;
}
