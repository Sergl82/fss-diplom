<?php

namespace App\Http\Controllers;

use App\Http\Requests\CinemaHallRequest;
use App\Models\CinemaHall;
use Illuminate\Http\Response;

class CinemaHallController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(): string
    {
        return CinemaHall::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(CinemaHallRequest $request): CinemaHall
    {
        return CinemaHall::create($request->validated());
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\CinemaHall $cinemaHall
     * @return \Illuminate\Http\Response
     */
    public function show($id): Response
    {
        return CinemaHall::findOfFail($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\CinemaHall $cinemaHall
     * @return \Illuminate\Http\Response
     */
    public function update(CinemaHallRequest $request, CinemaHall $cinemaHall): bool
    {
        $cinemaHall->fill($request->validated());
        return $cinemaHall->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\CinemaHall $cinemaHall
     * @return \Illuminate\Http\Response
     */
    public function destroy(CinemaHall $cinemaHall): ?Response
    {
        if ($cinemaHall->delete()) {
            return response(null, Response::HTTP_NO_CONTENT);
        }
        return null;
    }
}
