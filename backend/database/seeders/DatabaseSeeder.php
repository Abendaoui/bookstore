<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Book;
use App\Models\Cart;
use App\Models\User;
use App\Models\Order;
use App\Models\Author;
use App\Models\Reviews;
use App\Models\Delivery;
use App\Models\Categories;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run()
    {

        // Create 50 authors
        // Author::factory(50)->create();

        // Create 20 categories
        // Categories::factory(20)->create();

        // Create 100 books and assign random authors and categories to each book
        // Book::factory(100)->create()->each(function ($book) {
        //     $book->author()->attach(Author::inRandomOrder()->take(rand(1, 3))->pluck('id')->toArray());
        //     $book->category()->attach(Categories::inRandomOrder()->take(rand(1, 3))->pluck('id')->toArray());
        // });
        Reviews::factory()
            ->count(10)
            ->create();

        // Create 50 carts and assign random users and books to each cart
        // Cart::factory(50)->create()->each(function ($cart) {
        //     $cart->user()->associate(User::inRandomOrder()->first());
        //     $cart->books()->attach(Book::inRandomOrder()->take(rand(1, 5))->pluck('id')->toArray());
        // });

        // Create 20 orders and assign random users to each order
        // Order::factory(20)->create()->each(function ($order) {
        //     $order->user()->associate(User::inRandomOrder()->first());
        // });

        // Create 40 deliveries and assign random orders to each delivery
        // Delivery::factory(40)->create()->each(function ($delivery) {
        //     $delivery->order()->associate(Order::inRandomOrder()->first());
        // });

        // Create 200 reviews and assign random users and books to each review
        // Reviews::factory(200)->create()->each(function ($review) {
        //     $review->user()->associate(User::inRandomOrder()->first());
        //     $review->book()->associate(Book::inRandomOrder()->first());
        // });
    }
}
