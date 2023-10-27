<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRecipeListTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('recipe_lists', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('recipe_id');
            $table->string('image');
            $table->foreignId('listRecipe_id')->references('id')->on('lists');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::dropIfExists('recipe_lists');
    }
};