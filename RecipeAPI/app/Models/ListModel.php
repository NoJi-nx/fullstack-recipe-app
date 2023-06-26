<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ListModel extends Model
{
    use HasFactory;

    protected $table = 'lists';
    protected $fillable = [
        'title',
        'user_id'
    ];

    public function recipeList()
    {
        return $this->hasMany(RecipeListModel::class, "list_id");
    }
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }


}
