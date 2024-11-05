<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use Illuminate\Support\Facades\Log;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Category::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, Category $category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        //
    }
    public function getCategorisWithChildren() 
    {
        $categories = Category::with('children')->where('parent_id', null)->get();
        return response()->json($categories);
    }
    public function getArticleByCategory($slug)
    {
        $category = Category::with('articles.category', 'children.articles.category', 'parent')
            ->where('slug', $slug)->first();
        
        if (!$category) {
            return response()->json(['message'=> "Category not found"], 404);
        }
        if ($category->parent_id != null) {
            $category->setRelation('articles', $category->articles->sortByDesc('updated_at')->values());
            return response()->json($category);
        } else {
            $articlesChild = $category->children->flatMap(function ($child) {
                return $child->articles; // Lấy articles từ từng child
            });
            $category->setRelation('articles', $category->articles->merge($articlesChild)->sortByDesc('updated_at')->values());
            return response()->json($category);
        }
        
    }
}
