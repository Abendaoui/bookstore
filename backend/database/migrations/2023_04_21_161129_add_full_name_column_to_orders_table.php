<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->string('full_name');
            $table->string('email');
            $table->string('address');
            $table->string('method');
            $table->string('telephone');
            $table->string('ordered_products');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->dropColumn('full_name');
            $table->dropColumn('email');
            $table->dropColumn('address');
            $table->dropColumn('method');
            $table->dropColumn('telephone');
            $table->dropColumn('ordered_products');
        });
    }
};
