<?php

namespace Database\Factories;

use App\Models\Color;
use App\Models\Size;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'price' => fake()->randomFloat(2, 100, 1000),
            'rating' => fake()->randomFloat(1, 0, 5),
            'reviewCount' => fake()->randomNumber(),
            'href' => '#',
            'imageSrc' => 'https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg',
            'imageAlt' => fake()->sentence(10),
            'colors' => Color::all()->random(3)->id,
            'sizes' => Size::all()->random(6)->id
        ];
    }
}
