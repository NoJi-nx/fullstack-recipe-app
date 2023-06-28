<?php

namespace App\Http\Controllers;

use App\Models\RecipeListModel;
use Illuminate\Http\Request;

class RecipeListController extends Controller
{
    public function getRecipes($listId)
    {
        $recipes = RecipeListModel::all()->where('listRecipe_id', $listId);

        if ($recipes->isEmpty()) {
            return response($recipes, 204);
        }
        return response($recipes, 200); 
       
    }

    //Lägga
    public function addRecipe(Request $request, $listId)
    {
        $exist = RecipeListModel::where('name', $request['recipeName'])->where('listRecipe_id', $listId);

        if (!$exist->count()) {
            $recipe = RecipeListModel::create([
                'name' => $request['recipeName'],
                'recipe_id' => $request['recipeId'],
                'image' => $request['image'],
                'listRecipe_id' => $listId,
            ]);
            return  response($recipe, 200);
        } else {
            return $this->errorHandler($exist, 'Already exists');
        }
    }

    //Ta bort
    public function deleteRecipe($recipeId)
    {
        if (RecipeListModel::where('id', $recipeId)->exists()) {
            $recipe = RecipeListModel::find($recipeId);
            $recipe->delete();

            return response()->json([
                "message" => "Recipe Deleted"
            ], 200);
        } else {
            return response()->json([
                "message" => "Recipe not found"
            ], 404);
        }
    }
}
