<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'price' => $this->price,
            'cover' => $this->cover,
            'category_id' => $this->category_id,
            'published_date' => $this->published_date,
            'language' => $this->language,
            'nb_pages' => $this->nb_pages,
            'author_id' => $this->author_id,
            'stock' => $this->stock,
        ];
    }
}
