<?php

namespace App\Models;

use App\Models\Book;
use App\Models\User;
use App\Models\Returns;
use App\Models\Delivery;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Order extends Model
{
    use HasFactory;

    protected $guarded = [];


    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function books()
    {
        return $this->belongsToMany(Book::class)->withPivot('quantity', 'price');
    }

    public function delivery()
    {
        return $this->hasOne(Delivery::class);
    }

    public function returns()
    {
        return $this->hasMany(Returns::class);
    }
}
