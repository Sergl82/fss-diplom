import {useSelector} from "react-redux";
import MovieInfo from "./movieInfo";
import MovieHall from "./movieHall";

export default function Movie(props) {
    const {cinemaHalls} = useSelector((state) => state.calendar);
    const {id} = props;
    const movieHalls = cinemaHalls.filter((cinemaHall) => cinemaHall.sessions.find((session) => +session.film_id === id));

    return (
        <section className="movie">
            <MovieInfo id={id}/>
            {movieHalls.map((cinemaHall) =>
                <MovieHall
                    cinemaHallId={cinemaHall.id}
                    filmId={id}
                    key={cinemaHall.id}
                />
            )}
        </section>
    );
}
