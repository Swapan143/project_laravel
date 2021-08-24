<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\admin\AdminController;
use App\Http\Controllers\admin\DashboardController;
use App\Http\Controllers\admin\categorylist\CategoryController;
use App\Http\Controllers\admin\categorylist\SubcategoryController;
use App\Http\Controllers\admin\categorylist\ChildcategoryController;
use App\Http\Controllers\admin\Homecontroller;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
| 
*/

Route::get('/', [AdminController::class, 'index']);
Route::post('verify', [AdminController::class, 'verify']);
Route::get('/admin/changepassword', [AdminController::class, 'changePassword']);
Route::post('/admin/changepasswordverify', [AdminController::class, 'changePasswordVerify']);
Route::get('/admin/logout', [AdminController::class, 'logout']);
Route::get('/admin/dashboard', [DashboardController::class, 'index']);

///category info....
Route::get('/admin/category', [CategoryController::class, 'index']);
Route::post('/admin/categorySave', [CategoryController::class, 'save']);

///Sub Category info...
Route::get('/admin/subcategory', [SubcategoryController::class, 'index']);
Route::get('admin/viewsubcategory', [SubcategoryController::class, 'viewsubcategory']);

/// Child category info...

Route::get('/admin/childcategory', [ChildcategoryController::class, 'index']);
Route::get('/admin/viewchildcategory', [ChildcategoryController::class, 'viewchildcategory']);


Route::resource('posts', PostController::class);
Route::get('/admin/Home',[Homecontroller::class,'home'])->name('myhome');