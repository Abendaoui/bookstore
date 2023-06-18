<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\AuthorController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\ReviewsController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\CategoriesController;

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

Route::middleware('auth:sanctum')->group(function (){
    // User Routes
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::get('/getusers/{customer?}',[UserController::class,'getAllUsers']);
    Route::get('/getadmins/{customer?}',[UserController::class,'getAllAdmins']);
    Route::get('/userscount',[UserController::class,'compareUsers']);
    Route::apiResource('/users',UserController::class);
    // Auth Routes
    Route::post('/logout',[AuthController::class,'logout']);
    // Books
    Route::apiResource('/books',BookController::class);
    Route::get('/getbooks/{target?}',[BookController::class,'getBooks']);
    Route::get('/author/{author}',[BookController::class,'booksByAuthor']);
    Route::get('/category/{category}',[BookController::class,'booksByCategory']);
    Route::get('/recentbook',[BookController::class,'getRecentBooks']);
    Route::get('/randombooks',[BookController::class,'getRandomBooks']);
    Route::get('/latestbooks',[BookController::class,'getLatestBooks']);
    Route::get('/arabicbooks',[BookController::class,'getArabicBooks']);
    Route::get('/kidsbooks',[BookController::class,'getKidsBooks']);
    Route::get('/adultbooks',[BookController::class,'getAdultsBooks']);
    Route::get('/searchbooks/{book?}',[BookController::class,'getSearchBooks']);

    // Categories
    Route::apiResource('/categories',CategoriesController::class);
    Route::get('/getcategories',[CategoriesController::class,'getAllCategories']);
    // Authors
    Route::apiResource('/authors',AuthorController::class);
    Route::get('/getauthors',[AuthorController::class,'getAllAuthor']);

    // Cart
    Route::apiResource('/carts',CartController::class);
    Route::get('/total',[CartController::class,'getTotalPrice']);
    Route::get('/cartcount',[CartController::class,'getCartCount']);
    Route::delete('/removeAllCart',[CartController::class,'removeAllCart']);
    Route::put('/cart/{id}/add',[CartController::class,'add']);
    Route::put('/cart/{id}/minus',[CartController::class,'minus']);

    // Order
    Route::apiResource('/orders',OrderController::class);
    Route::get('/getorder/{status?}/{customer?}',[OrderController::class,'getOrder'])->name('getorder');
    Route::get('/gettransactions/{customer?}',[OrderController::class,'getTransactions'])->name('transactions');
    Route::get('/gettotalseles',[OrderController::class,'compareTotalSales']);
    Route::get("/ordercount",[OrderController::class,'compareOrderTotal']);
    Route::get('/recentorder',[OrderController::class,'getRecentOrder']);
    Route::get('/compareorder',[OrderController::class,'compareOrdersDelivered']);
    // Messgees
    Route::apiResource('/messages',MessageController::class);

    //Reviews
    Route::apiResource('/reviews',ReviewsController::class);
    Route::get('/getreviews/{book_id}',[ReviewsController::class,'getReviews']);

});
Route::post('/contact',[ContactController::class,'store'])->middleware('guest');
Route::post('/register',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);
Route::get('/mainsearch/{book?}',[BookController::class,'getSearchBooks']);
Route::get('/mainrandombooks',[BookController::class,'getRandomBooks']);
Route::apiResource('/mainbooks',BookController::class);
Route::get('/mainlatestbooks',[BookController::class,'getLatestBooks']);
Route::get('/mainarabicbooks',[BookController::class,'getArabicBooks']);
Route::get('/mainkidsbooks',[BookController::class,'getKidsBooks']);
Route::get('/mainadultbooks',[BookController::class,'getAdultsBooks']);
