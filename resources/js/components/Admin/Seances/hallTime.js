import {useSelector} from "react-redux";
import MovieTime from "./movieTime";

export default function HallTime(props) {
    const {seances} = useSelector((state) => state.admin);
    const {cinemaHall} = props;

    const cinemaHallSeances = seances.filter((seance) => +seance.cinema_hall_id === cinemaHall);
    cinemaHallSeances.sort((a, b) => Date.parse(a.datetime) - Date.parse(b.datetime));

    return (
        <div className="conf-step__seances-timeline">
            {cinemaHallSeances.map((seance) =>
                <MovieTime
                    id={seance.film_id}
                    seance={seance.id}
                    time={seance.datetime}
                    key={seance.id}
                />
            )}
        </div>
    );
}
