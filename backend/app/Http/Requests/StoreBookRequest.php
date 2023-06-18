<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBookRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
            return [
            'title' => 'required',
            'author_id' => 'required',
            'category_id' => 'required',
            'description' => 'required',
            'cover' => 'required|image',
            'price' => 'required',
            'nb_pages' => 'required',
            'published_date' => 'required',
            'language' => 'required'
        ];
    }
}
