<?php

namespace Tests\Feature;

use Illuminate\Http\Request;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class LoginThrottleTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function testLoginRateLimit()
    {
        $request = Request::create('api/login', 'POST', [], [], [], ['REMOTE_ADDR' => '192.168.1.1']);

        for ($i = 0; $i < 5; $i++) {
            $response = $this->call('POST', 'api/login', [], [], [], $request->server());
        }
        $response = $this->call('POST', 'api/login', [], [], [], $request->server());
        $response->assertStatus(429);
    }
}
