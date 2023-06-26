<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ListController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use PharIo\Manifest\AuthorCollection;

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
// Login user
Route::post('login', [AuthController::class, 'login']);
// Register user
Route::post('register', [AuthController::class, 'register']);

// If logged in...
Route::group(['middleware' => 'auth:sanctum'], function() {
    // Logout user
    Route::post('logout', [AuthController::class, 'logout']);
    // Get specific user details
    Route::get('getuser/{id}', [AuthController::class, 'getUser']);

    // TODO: CRUD for recipe lists

Route::get('lists', [ListController::class, 'getAllLists']);

Route::post('lists/{id}', [ListController::class, 'createList']);

Route::put('lists/{id}', [ListController::class, 'updateList']);

Route::delete('list/{id}', [ListController::class, 'deleteList']);

/*Route::get('list/{id}', [ListController::class, 'getList']);


Route::get('lists/search/{id}', [ListController::class], 'search');*/
});
