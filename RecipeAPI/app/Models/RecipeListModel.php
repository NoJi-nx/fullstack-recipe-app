<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RecipeListModel extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'recipe_id',
        'image',
        'listRecipe_id'
    ];

    public function userLists()
    {
        return $this->belongsTo(ListModel::class, 'id');
    }
}
