<?php

namespace App\Http\Controllers;

use App\Http\Requests\TicketRequest;
use App\Services\TicketService;
use Illuminate\Http\Response;

class TicketController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */

    public function store(TicketRequest $request): Response
    {
        $params = $request->validated();
        $ticket = (new TicketService())->create($params);
        return response($ticket, 201);
    }
}
