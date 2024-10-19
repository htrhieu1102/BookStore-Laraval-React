<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $table = 'articles';
    protected $fillable = [
        'title',
        'slug',
        'description',
        'detail',
        'image',
        'author_id',
        'status_id',
        'category_id',
    ];

    public function author() 
    {
        return $this->belongsTo(User::class, 'author_id');
    }
    public function status()
    {
        return $this->belongsTo(Status::class, 'status_id');
    }
    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
}
