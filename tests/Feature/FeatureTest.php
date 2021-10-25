<?php

namespace Tests\Feature;

use Tests\TestCase;

class FeatureTest extends TestCase
{
    public function test_環境がテスト用に設定されている()
    {
        $this->assertTrue(config('app.env') === 'testing', 'Need to run php artisan optimize:clear');
    }

    public function test_テスト用データベースへの接続ができる()
    {
        $this->assertTrue(env('DB_DATABASE') === 'test_database');
    }

    public function test_php_artisan_migrate_––seed_––env_testing_が実行されている()
    {
        $this->assertDatabaseMissing('users', ['id' => 1]);
    }

    public function test_テスト設定例が動く()
    {
        $this->assertTrue(true);
    }
}
