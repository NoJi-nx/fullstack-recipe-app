export interface Recipe {
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  image: string;
  summary: string;
  dishType: string;
  diet: string;
  instructions: string;
}
