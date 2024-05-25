<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Color extends Model
{
    use HasFactory;

    protected $fillable = ['name'];
}

class Size extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'inStock'];
}

class Product extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'price',
        'rating',
        'reviewCount',
        'href',
        'imageSrc',
        'imageAlt',
        'colors',
        'sizes',
    ];

    /**
     * The model's default values for attributes.
     *
     * @var array
     */
    protected $attributes = [
        'rating' => 0,
        'reviewCount' => 0,
    ];

    public function colors()
    {
        return $this->hasMany(Color::class);
    }

    public function sizes()
    {
        return $this->hasMany(Size::class);
    }

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [];
}
