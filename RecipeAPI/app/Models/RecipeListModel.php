<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RecipeListModel extends Model
{
    use HasFactory;

    protected $fillable = [
        'recipe',
        'recipe_id',
        'image',
        'list_id'
    ];

    public function user()
    {
        return $this->belongsTo(ListModel::class, 'id');
    }
}
