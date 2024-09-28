<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreArticleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:50|unique:articles,title',
            'description' => 'required',
            'detail' => 'required',
            'image' => 'required|string',
            'author_id' => 'required|exists:users,id',
            'status_id' => 'required|exists:statuses,id',
            'category_id' => 'required|exists:categories,id',
            'published_at' => 'nullable|date',
        ];
    }
}
