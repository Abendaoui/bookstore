<?php

namespace Database\Factories;

use App\Models\Delivery;
use App\Models\Order;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Delivery>
 */
class DeliveryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = Delivery::class;
    public function definition(): array
    {
        return [
            'order_id' => Order::inRandomOrder()->first()->id,
            'delivery_method' => 'delivery',
            'delivery_status' => 'success',
            'delivery_date' => $this->faker->dateTimeBetween('-2 weeks', 'now'),
            'delivery_address' => $this->faker->address,
            'city' => $this->faker->city,
        ];
    }
}
