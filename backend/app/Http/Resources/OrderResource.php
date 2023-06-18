<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
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
            'order_date' => $this->order_date,
            'total_price' => $this->total_price,
            'status' => $this->status,
            'address' => $this->address,
            "method" => $this->method,
            'ordered_products' => $this->ordered_products,
            'telephone' => $this->telephone,
            'full_name' => $this->full_name,
            'email' => $this->email,
            'user_id' => $this->user_id
        ];
    }
}
