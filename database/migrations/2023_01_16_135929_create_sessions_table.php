<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSessionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sessions', function (Blueprint $table) {
            $table->id();
            $table->datetime('datetime');
            $table->unsignedInteger('cinema_hall_id');
            $table->foreign('cinema_hall_id')->references('id')->on('cinema_halls')->onDelete('cascade');
            $table->unsignedInteger('film_id');
            $table->foreign('film_id')->references('id')->on('films')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sessions');
    }
}
