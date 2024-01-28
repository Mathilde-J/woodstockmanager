<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Client>
 */
class ClientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'first_name' => fake()->firstName(),
            'last_name' => fake()->lastName(),
            'email' => fake()->unique()->safeEmail(),
            'phone' => fake() ->unique()->phoneNumber(),
            'delivery_address' => fake()->streetAddress(),
            'delivery_zip_code' => 12335,
            'delivery_city' => fake()->city(),
            'billing_address' => fake()->streetAddress(),
            'billing_zip_code' => 12345,
            'billing_city' => fake()->city(),
            'company_id' => random_int(1, 2),
        ];

    }
}
