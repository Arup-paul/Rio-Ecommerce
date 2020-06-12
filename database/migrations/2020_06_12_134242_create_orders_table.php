<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id');
            $table->string('customer_name',128);
            $table->string('customer_phone_number',32);
            $table->text('address');
            $table->string('city',32);
            $table->string('postal_code',16);
            $table->decimal('total_amount',10,2);
            $table->decimal('discount_amount',10,2)->default(0.00);
            $table->decimal('paid_amount',10,2);
            $table->string('payment_status',16)->default('pending');
            $table->text('payment_details')->nullable();
            $table->string('operational_status',16)->default('pending');
            $table->unsignedBigInteger('processed_by')->nullable();
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('processed_by')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
}
