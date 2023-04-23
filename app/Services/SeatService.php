<?php

namespace App\Services;

use App\Models\Seat;
use App\Models\Ticket;
use PhpParser\Error;

class SeatService
{
    public function create(array $params): Seat
    {

        if (!$params['seats']) {
            throw new Error("Error! Cannot create tickets for seats");
        }

        foreach ($params['seats'] as $seatId) {
            $seat = Seat::findOrFail($seatId);
            $ticket = Ticket::create($params)->seats()->save($seat);
        }
        return $ticket;
    }
}
