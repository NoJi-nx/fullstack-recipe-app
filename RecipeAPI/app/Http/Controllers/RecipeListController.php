<?php

namespace App\Http\Controllers;

use App\Models\RecipeListModel;
use Illuminate\Http\Request;

class RecipeListController extends Controller
{
    public function getRecipes($listId)
    {
        $recipes = RecipeListModel::all()->where('listRecipe_id', $listId);
       
    }

    //Add
    public function addRecipe($listId, Request $request)
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

    //Delete recipe
    public function deleteRecipe($id)
    {
        if (RecipeListModel::where('id', $id)->exists()) {
            $recipe = RecipeListModel::find($id);
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
