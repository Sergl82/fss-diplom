<?php

namespace App\Http\Controllers;

use App\Models\CinemaHall;
use App\Models\Film;
use App\Models\Session;
use App\Models\Seat;
use DateTime;
use Illuminate\Database\Eloquent\Builder;

class CommonController extends Controller
{

    public function calendar(string $datetime): array
    {

        $timeSeance = DateTime::createFromFormat('Y-m-d', $datetime)->format('Y-m-d');
        // доступные для посещения кинозалы

        $cinemaHalls = CinemaHall::where('free', 1)->whereHas('sessions', function (Builder $query) use ($timeSeance) {
            $query->whereDate('datetime', $timeSeance);
        })->select('id', 'name')->get();

        // доступные к просмотру фильмы
        $sessions = Session::whereDate('datetime', $timeSeance)->whereHas('cinemaHall', function (Builder $query) {
            $query->where('free', 1);
        })->get();

        $films = Film::all()->whereIn('id', $sessions->pluck('film_id'));

        return ["cinemaHalls" => $cinemaHalls, "sessions" => $sessions, "films" => $films];

    }

    // информация о сеансе

    public function seatSelect(int $sessionId): array
    {
        $session = Session::where('sessions.id', $sessionId)
            ->join('cinema_halls', 'sessions.cinema_hall_id', '=', 'cinema_halls.id')
            ->join('films', 'sessions.film_id', '=', 'films.id')
            ->select(
                'sessions.id',
                'sessions.datetime',
                'films.title',
                'sessions.cinema_hall_id',
                'cinema_halls.name',
                'cinema_halls.row',
                'cinema_halls.price_standard',
                'cinema_halls.price_vip',
            )->first();

        $tickets = Seat::has('tickets')->whereHas('tickets', function (Builder $query) use ($sessionId) {
            $query->where('session_id', $sessionId);
        })->get();

        $seats = Seat::where('cinema_hall_id', $session->cinema_hall_id)->select('id', 'number', 'status')->get();

        foreach ($seats as $seat) {
            if ($tickets->contains($seat)) {
                $seat->status = 'sold';
            }
        }
        return ["session" => $session, "seats" => $seats];
    }
}

