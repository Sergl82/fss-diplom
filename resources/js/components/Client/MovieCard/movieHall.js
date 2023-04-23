import {useSelector} from "react-redux";
import MovieSeance from "./movieSeance";

export default function MovieHall(props) {
    const {cinemaHalls} = useSelector((state) => state.calendar);
    const {cinemaHallId, filmId} = props;
    const cinemaHall = cinemaHalls.find((cinemaHall) => cinemaHall.id === cinemaHallId);
    const cinemaHallSeances = cinemaHall.sessions.filter((session) => +session.film_id === filmId);

    return (
        <div className="movie-seances__hall">
            <h3 className="movie-seances__hall-title">{cinemaHall.name}</h3>
            <ul className="movie-seances__list">
                {cinemaHallSeances.map((seance) =>
                    <MovieSeance
                        id={seance.id}
                        time={seance.datetime}
                        key={seance.id}
                    />
                )}
            </ul>
        </div>
    );
}
