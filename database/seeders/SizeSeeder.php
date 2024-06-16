<?php

namespace Database\Seeders;

use App\Models\Size;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SizeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Size::create(['name' => 'XXS', 'inStock' => fake()->boolean()]);
        Size::create(['name' => 'XS', 'inStock' => fake()->boolean()]);
        Size::create(['name' => 'S', 'inStock' => fake()->boolean()]);
        Size::create(['name' => 'M', 'inStock' => fake()->boolean()]);
        Size::create(['name' => 'L', 'inStock' => fake()->boolean()]);
        Size::create(['name' => 'XL', 'inStock' => fake()->boolean()]);
        Size::create(['name' => 'XXL', 'inStock' => fake()->boolean()]);
        Size::create(['name' => 'XXXL', 'inStock' => fake()->boolean()]);
    }
}
