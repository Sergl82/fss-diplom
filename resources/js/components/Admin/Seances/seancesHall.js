import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getSeances} from "../../../reducers/createAdminSlice";
import AddSeanceAction from "../Actions/addSeanceAction";

export default function SeancesHall() {
    const {cinemaHalls, chosenDate} = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSeances());
    }, [chosenDate]);

    return (
        <div className="conf-step__seances">
            {cinemaHalls.map((cinemaHall) =>
                <AddSeanceAction
                    cinemaHallId={cinemaHall.id}
                    name={cinemaHall.name}
                    key={cinemaHall.id}
                />
            )}
        </div>
    );
}
