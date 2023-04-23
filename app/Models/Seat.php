<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Seat extends Model
{
    use HasFactory;

    protected $fillable = [
        'number', 'status', 'cinema_hall_id',
    ];

    protected $hidden = [
        'created_up', 'updated_at',
    ];

    public function cinemaHall(): BelongsTo
    {
        return $this->belongsTo(CinemaHall::class, 'cinema_hall_id');
    }

    public function tickets(): BelongsToMany
    {
        return $this->belongsToMany(Ticket::class);
    }
}
