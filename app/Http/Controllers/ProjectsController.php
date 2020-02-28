<?php

namespace App\Http\Controllers;

use App\Project;
use Illuminate\Http\Request;
use JWTAuth;
use Validator;
use Response;

class ProjectsController extends Controller
{



    public function index(Request $request)
    {
        if (! $projects = Project::all() ) 
        {
            $status = 'error';
            $error = 'Projects not founds';
            return response()->json(compact('status', 'error'));
        }

        $status = 'success';
        return response()->json(compact('status', 'projects'));
    }






    public function store(Request $request)
    {

        // vérification que tous les champs soient correctements remplis
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255|unique:projects',
            'title' => 'required|string|max:255',
            'content'=> 'required',
            'link'=>'required|string',
        ]);

        // si un champs ne l'est pas
        if ($validator->fails()) {
            //on retourne l'erreur
            $status = 'error';
            $error = $validator->errors();
            return response()->json(compact('status','error'));
        }


        // Enregistrer le post dans la DB 
        $project = Project::create([
            'name'  => $request->get('name'),
            'title'  => $request->get('title'),
            'content' => $request->get('content'),
            'lang' => $request->get('lang'),
            'link' => $request->get('link'),
        ]);

        // retourner le succès et le post
        $status = 'success';
        return response()->json(compact('status', 'project'), 200);
    }






    public function update(Request $request, $name)
    {

        if (! $project = Project::where('name', $name)->first() )
        {
            $status = 'error';
            $error = 'Invalid project name (not found)';
            return response()->json(compact('status','error'));
        }

        // vérification que tous les champs soient correctements remplis
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'content' => 'required',
            'link'=> 'required|string'
        ]);

        // si un champs ne l'est pas
        if ($validator->fails()) {
            //on retourne l'erreur
            $status = 'error';
            $error = $validator->errors();
            return response()->json(compact('status','error'));
        }


        // Enregistrer le post dans la DB
        $project->title = $request->get('title');
        $project->content = $request->get('content');
        $project->lang = $request->get('lang');
        $project->link = $request->get('link');
        $project->save();

        $project = Project::where('name', $name)->first();
        // retourner le succès et le post
        $status = 'success';
        return response()->json(compact('status', 'project'), 200);
    }







    public function destroy(Request $request, $name)
    {
    
        if (! $project = Project::where('name', $name)->first() )
        {
            $status = 'error';
            $error = 'Invalid project name (not found)';
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
        if ($project->title == $request->get('title') )
        {
            $project->delete();
            $status = 'success';
            return response()->json(compact('status'), 200);
        }

        $status = 'error';
        $error = 'Wrong title';
        return response()->json(compact('status', 'error'), 200);
    }



}
