<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ListController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use PharIo\Manifest\AuthorCollection;
use App\Http\Controllers\RecipeListController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


// Om  inloggad
Route::group(['middleware' => 'auth:sanctum'], function() {
// Logga ut användare
Route::post('logout', [AuthController::class, 'logout']);
// Info på användaren
Route::get('getuser/{id}', [AuthController::class, 'getUser']);

Route::get('list/{id}', [ListController::class, 'getList']);

    // TODO: CRUD for recipe lists

Route::get('lists', [ListController::class, 'getAllLists']);

Route::post('list-create/{id}', [ListController::class, 'createList']);

Route::put('list-update/{id}', [ListController::class, 'updateList']);

Route::delete('list-delete/{id}', [ListController::class, 'deleteList']);


 Route::get('recipelist/{listId}', [RecipeListController::class], 'getRecipes');


 Route::post('recipelist-add/{listId}', [RecipeListController::class], 'addRecipe');


 Route::delete('recipelist-delete/{listId}', [RecipeListController::class, 'deleteRecipe']);

/*Route::get('list/{id}', [ListController::class, 'getList']);


Route::get('lists/search/{id}', [ListController::class], 'search');*/
});

// Logga in
Route::post('login', [AuthController::class, 'login']);
// Registrera
Route::post('register', [AuthController::class, 'register']);
