<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('statuses', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('type');
            $table->timestamps();
        });
        DB::table('statuses')->insert(
            [
                ['name' => 'draft', 'type' => 'article', 'created_at' => now()],
                ['name' => 'published', 'type' =>'article', 'created_at' => now()],
                ['name' => 'archived', 'type' =>'article', 'created_at' => now()],
            ]
        );
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('statuses');
    }
};
