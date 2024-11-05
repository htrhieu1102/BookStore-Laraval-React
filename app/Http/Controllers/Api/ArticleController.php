<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Http\Requests\StoreArticleRequest;
use App\Http\Requests\UpdateArticleRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $orderBy = $request->get("sort_by","id");
        $sortOrder = $request->get("sort_order","asc");
        $articles = Article::orderBy($orderBy, $sortOrder)->paginate(10);
        return response()->json($articles);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreArticleRequest $request)
    {
        //
        $data = $request->validated();
        $data['slug'] = Str::slug($data['title']);
        $userId = Auth::id();
        if ($userId === null) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        $data['author_id'] = $userId;
        $data['status_id'] = 1;
        $article = Article::create([
            'title' => $data['title'],
            'slug' => $data['slug'],
            'description' => $data['description'],
            'detail' => $data['detail'],
            'image' => $data['image'],
            'author_id' => $data['author_id'],
            'status_id' => $data['status_id'],
            'category_id' => $data['category_id'],
        ]);
        return response()->json($article);
    }

    /**
     * Display the specified resource.
     */
    public function show(Article $article)
    {
        //
    }
    public function showWithSlug(string $slug) {
        $article = Article::with('category.parent')->where('slug', $slug)->first();
        if (!$article) {
            return response()->json(['message' => 'Article not found'], 404);
        }
        return response()->json($article);

    }
    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateArticleRequest $request, Article $article)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article)
    {
        //
    }
}
