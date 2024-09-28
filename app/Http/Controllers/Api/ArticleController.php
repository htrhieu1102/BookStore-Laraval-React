<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Http\Requests\StoreArticleRequest;
use App\Http\Requests\UpdateArticleRequest;
use Illuminate\Support\Str;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articles = Article::paginate(5);
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
        if (empty($data['published_at'])) {
            $data['published_at'] = now();
        }
        $article = Article::create([
            'title' => $data['title'],
            'slug' => $data['slug'],
            'description' => $data['description'],
            'detail' => $data['detail'],
            'image' => $data['image'],
            'author_id' => $data['author_id'],
            'status_id' => $data['status_id'],
            'category_id' => $data['category_id'],
            'published_at' => $data['published_at'],
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
