<?php

namespace Database\Seeders;

use App\Models\Color;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ColorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Color::create(['name' => 'gray', 'product_id' => 1]);
        Color::create(['name' => 'black', 'product_id' => 1]);
        Color::create(['name' => 'white', 'product_id' => 1]);
    }
}
