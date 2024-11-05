<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ArticleController;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->group(function() {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/articles', [ArticleController::class,'store']);

});
Route::apiResource('articles', ArticleController::class)->except('store');
Route::apiResource('categories', CategoryController::class);

Route::get('/articles/detail/{slug}', [ArticleController::class, 'showWithSlug']);
Route::get('cats-with-children', [CategoryController::class, 'getCategorisWithChildren']);
Route::get('category/{slug}', [CategoryController::class, 'getArticleByCategory']);

Route::post('/signup', [AuthController::class, 'signup'] );
Route::post('/login', [AuthController::class, 'login']);
