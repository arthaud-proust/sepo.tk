<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use JWTAuth;
use App\User;
use Validator;
use Response;

class UsersController extends Controller
{
    public function login(Request $request) 
    {
        // vérification que tous les champs soient correctements remplis
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'password'=> 'required'
        ]);

        // si un champs ne l'est pas
        if ($validator->fails()) {
            //on retourne l'erreur
            $status = 'error';
            $error = $validator->errors();
            return response()->json(compact('status', 'error'));
        }

        // on recupère le password et l'email
        $credentials = $request->only('name', 'password');
        try {
            // si les identifiants ne correspondent pas 
            if (! $token = JWTAuth::attempt($credentials)) {
                // on retourne l'erreur
                $status = 'error';
                $error = 'Invalid login';
                return response()->json(compact('status','error'), 401);
            }
        } catch (JWTException $e) {
            // S'il est impossible de créer le token
            // on retourne l'erreur
            return response()->json(['error' => 'Could not create token'], 500);
        }

        $status = 'success';
        $user = User::whereName($request->get('name'))->first();
        // On retourne le status, token, et les info de l'user
        return response()->json(compact('status','token', 'user'));
    }
}
