<?php

namespace App\Http\Controllers;

use App\Subject;
use Illuminate\Http\Request;
use JWTAuth;
use Validator;
use Response;

class SubjectsController extends Controller
{
    


    public function index(Request $request)
    {
        if (! $subjects = Subject::all() ) 
        {
            $status = 'error';
            $error = 'Subjects not founds';
            return response()->json(compact('status', 'error'));
        }

        $status = 'success';
        return response()->json(compact('status', 'subjects'));
    }






    public function store(Request $request)
    {

        // vérification que tous les champs soient correctements remplis
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255|unique:subjects',
            'title' => 'required|string|max:255',
            'content'=> 'required'
        ]);

        // si un champs ne l'est pas
        if ($validator->fails()) {
            //on retourne l'erreur
            $status = 'error';
            $error = $validator->errors();
            return response()->json(compact('status','error'));
        }


        // Enregistrer le post dans la DB 
        $subject = new Subject;
        $subject->name = $request->get('name');
        $subject->title = $request->get('title');
        $subject->content = $request->get('content');
        if ($request->get('lang')) {
            $subject->lang = $request->get('lang');
        }
        if ($request->get('link_name')) {
            $subject->link_name = $request->get('link_name');
        }
        if ($request->get('link_to')) {
            $subject->link_to = $request->get('link_to');
        }
        $subject->save();

        // retourner le succès et le post
        $status = 'success';
        return response()->json(compact('status', 'subject'), 200);
    }






    public function update(Request $request, $name)
    {

        if (! $subject = Subject::where('name', $name)->first() )
        {
            $status = 'error';
            $error = 'Invalid Subject name (not found)';
            return response()->json(compact('status','error'));
        }

        // vérification que tous les champs soient correctements remplis
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'content' => 'required'
        ]);

        // si un champs ne l'est pas
        if ($validator->fails()) {
            //on retourne l'erreur
            $status = 'error';
            $error = $validator->errors();
            return response()->json(compact('status','error'));
        }


        // Enregistrer le post dans la DB
        $subject->title = $request->get('title');
        $subject->content = $request->get('content');
        if ($request->get('lang')) {
            $subject->lang = $request->get('lang');
        }
        if ($request->get('link_name')) {
            $subject->link_name = $request->get('link_name');
        }
        if ($request->get('link_to')) {
            $subject->link_to = $request->get('link_to');
        }
        $subject->save();

        $subject = Subject::where('name', $name)->first();
        // retourner le succès et le post
        $status = 'success';
        return response()->json(compact('status', 'subject'), 200);
    }







    public function destroy(Request $request, $name)
    {
    
        if (! $subject = Subject::where('name', $name)->first() )
        {
            $status = 'error';
            $error = 'Invalid Subject name (not found)';
            return response()->json(compact('status','error'));
        }

        // vérification que tous les champs soient correctements remplis
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
        ]);

        // si un champs ne l'est pas
        if ($validator->fails()) {
            //on retourne l'erreur
            $status = 'error';
            $error = $validator->errors();
            return response()->json(compact('status','error'));
        }


        // Delete le post de la DB
        if ($subject->title == $request->get('title') )
        {
            $subject->delete();
            $status = 'success';
            return response()->json(compact('status'), 200);
        }

        $status = 'error';
        $error = 'Wrong title';
        return response()->json(compact('status', 'error'), 200);
    }



}
