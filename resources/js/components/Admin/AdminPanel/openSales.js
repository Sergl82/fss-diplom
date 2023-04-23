import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {updateHall} from "../../../reducers/createAdminSlice";
import ChooseOpenHalls from "../Seances/chooseOpenHalls";
import Button from "../Buttons/btn";

export default function OpenSales() {
    const {cinemaHalls} = useSelector((state) => state.admin);
    const [changedCinemaHalls, setChangedCinemaHalls] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        setChangedCinemaHalls(cinemaHalls);
    }, [cinemaHalls]);

    const handleChange = (cinemaHall) => {
        setChangedCinemaHalls(prevState => prevState.map((item) =>
            item.id === cinemaHall.id ? {...item, "free": !+item.free} : item)
        );
    }

    const handleSubmit = () => {
        changedCinemaHalls.forEach((item) => {
            if (cinemaHalls.find((cinemaHall) => cinemaHall.id === item.id).free !== item.free) {
                dispatch(updateHall(item));
            }
        });
    }

    return (
        <div className="conf-step__wrapper text-center">
            <p className="conf-step__paragraph">Открыть зал:</p>
            <ul className="conf-step__list conf-step__list_start">
                {changedCinemaHalls.map((cinemaHall) =>
                    <li key={cinemaHall.id}>
                        <ChooseOpenHalls
                            id={cinemaHall.id}
                            name={cinemaHall.name}
                            free={+cinemaHall.free}
                            callback={() => handleChange(cinemaHall)}
                        />
                    </li>
                )}
            </ul>
            <p className="conf-step__paragraph">Всё готово, теперь можно:</p>
            <Button text={"Открыть продажу билетов"} callback={handleSubmit}/>
        </div>
    );
}
