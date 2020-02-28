<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    protected $table = 'subjects';

    protected $fillable = [
        'name', 'title', 'content', 'lang', 'link_name', 'link_to'
    ];
}
