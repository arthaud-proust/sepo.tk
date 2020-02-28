<?php

namespace App\Http\Controllers;

use App\Contact;
use Illuminate\Http\Request;
use JWTAuth;
use Validator;
use Response;

class ContactsController extends Controller
{
     
    public function index(Request $request)
    {
        if (! $contacts = Contact::all() ) 
        {
            $status = 'error';
            $error = 'Contacts not founds';
            return response()->json(compact('status', 'error'));
        }

        $status = 'success';
        return response()->json(compact('status', 'contacts'));
    }


    

    public function store(Request $request)
    {
        // Enregistrer le post dans la DB 
        $contact = Contact::create([
            'name'  => $request->get('name'),
            'icon'  => $request->get('icon'),
            'href' => $request->get('href'),
            'copy' => $request->get('copy'),
        ]);

        // retourner le succès et le post
        $status = 'success';
        return response()->json(compact('status', 'contact'), 200);
    }






    public function update(Request $request, $id)
    {

        if (! $contact = Contact::where('id', $id)->first() )
        {
            $status = 'error';
            $error = 'Invalid Contact id (not found)';
            return response()->json(compact('status','error'));
        }

        // Enregistrer le post dans la DB
        $contact->name = $request->get('name');
        $contact->icon = $request->get('icon');
        $contact->href = $request->get('href');
        $contact->copy = $request->get('copy');
        $contact->save();

        $contact = Contact::where('id', $id)->first();
        // retourner le succès et le post
        $status = 'success';
        return response()->json(compact('status', 'contact'), 200);
    }







    public function destroy(Request $request, $id)
    {
    
        if (! $contact = Contact::where('id', $id)->first() )
        {
            $status = 'error';
            $error = 'Invalid Contact id (not found)';
            return response()->json(compact('status','error'));
        }

        // Delete le post de la DB
        $contact->delete();
        $status = 'success';
        return response()->json(compact('status'), 200);
    }

}
