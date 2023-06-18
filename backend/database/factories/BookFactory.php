<?php

namespace Database\Factories;

use App\Models\Book;
use App\Models\Author;
use App\Models\Categories;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */


    protected $model = Book::class;
    public function definition(): array
    {
        $title = $this->faker->sentence;
        return [
            'title' => $title,
            'author_id' => Author::inRandomOrder()->first()->id,
            'category_id' => Categories::inRandomOrder()->first()->id,
            'slug' => Str::slug($title),
            'description' => $this->faker->paragraph,
            'cover' => $this->faker->imageUrl(),
            'price' => $this->faker->randomFloat(2, 10, 100),
            'language' => $this->faker->languageCode(),
            'nb_pages' => $this->faker->numberBetween(50, 500),
            'published_date' => $this->faker->dateTimeBetween('-5 year', 'now'),
        ];
    }

}
