<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use App\Http\Requests\StoreCategoriesRequest;
use App\Http\Requests\UpdateCategoriesRequest;
use App\Http\Resources\CategoryResource;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Categories::select('categories.id', 'categories.name', 'categories.image')
            ->whereExists(function ($query) {
                $query->select('books.id')
                    ->from('books')
                    ->whereRaw('books.category_id = categories.id');
            })
            ->get();
        return CategoryResource::collection($categories);
    }
    public function getAllCategories()
    {
        $categories = Categories::get();

        return CategoryResource::collection($categories);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoriesRequest $request)
    {
        $data = $request->validated();
        $image = $request->image;
        $imageName = time().'.'.$image->extension();
        $image->move(public_path('images/categories'), $imageName);
        $data['image'] = $imageName;
        Categories::create($data);

        return response()->json([
            'msg' => 'Category Added Successfully'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Categories $categories)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoriesRequest $request, Categories $categories)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Categories $categories)
    {
        //
    }
}
