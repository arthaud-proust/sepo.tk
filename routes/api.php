<?php

use Illuminate\Http\Request;



Route::group(['middleware' => ['cors']], function() 
{
    // Auth
    Route::post('login', 'UsersController@login');
    Route::post('register', 'UsersController@register');


    // Don't need to be logged
    Route::get('projects', 'ProjectsController@index');
    Route::get('subjects', 'SubjectsController@index');
    Route::get('contacts', 'ContactsController@index');

});



// Need to be logged
Route::group(['middleware' => ['jwt.auth']], function()
{

    // Projects

    Route::post('project/new', 'ProjectsController@store');

    Route::post('project/{name}/edit', 'ProjectsController@update');

    Route::post('project/{name}/delete', 'ProjectsController@destroy');


    // Subjects

    Route::post('subject/new', 'SubjectsController@store');

    Route::post('subject/{name}/edit', 'SubjectsController@update');

    Route::post('subject/{name}/delete', 'SubjectsController@destroy');

    // Contacts

    Route::post('contact/new', 'ContactsController@store');

    Route::post('contact/{name}/edit', 'ContactsController@update');

    Route::post('contact/{name}/delete', 'ContactsController@destroy');
});