<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/tasks', function(){
	$data[] = ['id'=>1, 'name'=>'name1'];
	$data[] = ['id'=>2, 'name'=>'name2'];
	$data[] = ['id'=>3, 'name'=>'name3'];
	return response()->json(['data'=>$data]);
});