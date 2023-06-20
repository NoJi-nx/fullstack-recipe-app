export interface Recipe {
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  image: string;
  summary: string;
  dishTypes: string;
  diets: string;
  instructions: string;
}
