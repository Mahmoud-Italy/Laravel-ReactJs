<?php

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

// Route::get('/', function () {
//     return view('welcome');
// });

// Admin Dashborad
// Route::group([
//   'namespace' => 'Backend\Admin',
//   'prefix' => 'admin',
//   'as' => 'admin.',
//   'middleware' => 'auth'],
//   function () {
//      require base_path('routes/backend/admin.php');
//   });
Route::view('dashboard/{path?}', 'dash')->where('path', '.*');
Route::view('/{path?}', 'app')->where('path', '.*');