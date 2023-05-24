<?php

namespace App\Http\Controllers;

use App\Models\ListModel;
use Illuminate\Http\Request;
use PhpParser\Node\Expr\List_;

class ListController extends Controller
{
    //CRUD
    // Läsa all
    public function getAllLists()
    {
        $lists = ListModel::get()->toJson(JSON_PRETTY_PRINT);
        return response($lists, 200);
    }
    //läsa en
    public function getList($id)
    {
        if (ListModel::where('id', $id)->exists()) {
            $list = ListModel::where('id', $id)->get()->toJson(JSON_PRETTY_PRINT);
            return response($list, 200);
        } else {
            return response()->json([
                "message" => "List not found"
            ], 404);
        }
    }
    //skapa en
    public function createList(Request $request)
    {
        $list = new ListModel();
        $list->title = $request->title;
        $list->save();

        return response()->json([
            "message" => "List created"
        ], 201);
    }
    //Ändra en
    public function updateList(Request $request, $id)
    {
        if (ListModel::where('id', $id)->exists()) {
            $list = ListModel::find($id);
            $list->title = is_null($request->title) ? $list->title : $request->title;
            $list->save();

            return response()->json([
                "message" => "List Updated"
            ], 200);
        } else {
            return response()->json([
                "message" => "List not found"
            ], 404);
        }
    }

    //Ta bort
    public function deleteList($id)
    {
        if (ListModel::where('id', $id)->exists()) {
            $list = ListModel::find($id);
            $list->delete();

            return response()->json([
                "message" => "List Deleted"
            ], 200);
        } else {
            return response()->json([
                "message" => "List not found"
            ], 404);
        }
    }

    //Söka en
    public function search($title)
    {
        return ListModel::where('title', 'like', '%' . $title . '%')->get();
    }
}
