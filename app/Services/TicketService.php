<?php

namespace App\Services;

use App\Models\Ticket;

class TicketService
{
    public function create(array $params): Ticket
    {
        $ticket = Ticket::create($params);

        (new SeatService())->create($params);
        return $ticket->whereId($ticket->id)->with('session')->with('seats')->first();
    }
}
