<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('title', 50)->unique();
            $table->string('slug')->unique();
            $table->text('description');
            $table->text('detail');
            $table->string('image');
            $table->foreignId('author_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('status_id')->constrained('statuses');
            $table->foreignId('category_id')->constrained('categories')->onDelete('cascade');
            $table->timestamp('published_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('articles');
    }
};
