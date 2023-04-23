import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {getHalls, updateHall} from "../../../reducers/createAdminSlice";
import ActionBtn from "../Buttons/actionBtn";
import ChooseHallBtn from "../Buttons/chooseHallBtn";
import SeatStatus from "../Seats/seatStatus";

export default function PriceConfig() {
    const {cinemaHalls} = useSelector((state) => state.admin);
    const [selectedCinemaHall, setSelectedCinemaHall] = useState(null);
    const dispatch = useDispatch();

    const handleSelect = (id) => {
        setSelectedCinemaHall(cinemaHalls.find((cinemaHall) => cinemaHall.id === id));
    }

    const handleChange = ({target}) => {
        const name = target.name;
        const value = target.value;
        setSelectedCinemaHall((prevState) => ({...prevState, [name]: value}));
    };

    const handleSave = () => {
        dispatch(updateHall(selectedCinemaHall));
        setSelectedCinemaHall(null);
        dispatch(getHalls());
    }

    return (
        <div className="conf-step__wrapper">
            <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
            <ul className="conf-step__selectors-box">
                {cinemaHalls.map((cinemaHall) =>
                    <ChooseHallBtn
                        name={cinemaHall.name}
                        checked={selectedCinemaHall ? cinemaHall.id === selectedCinemaHall.id : false}
                        callback={() => handleSelect(cinemaHall.id)}
                        key={cinemaHall.id}
                    />
                )}
            </ul>

            {selectedCinemaHall &&
                <>
                    <p className="conf-step__paragraph">Установите цены для типов кресел:</p>
                    <div className="conf-step__legend">
                        <label className="conf-step__label">Цена, рублей
                            <input type="text"
                                   className="conf-step__input"
                                   name="price_standard"
                                   value={selectedCinemaHall.price_standard}
                                   onChange={handleChange}
                            />
                        </label>
                        за <SeatStatus status={"standard"}/> обычные кресла
                    </div>
                    <div className="conf-step__legend">
                        <label className="conf-step__label">Цена, рублей
                            <input type="text"
                                   className="conf-step__input"
                                   name="price_vip"
                                   value={selectedCinemaHall.price_vip}
                                   onChange={handleChange}
                            />
                        </label>
                        за <SeatStatus status={"vip"}/> VIP кресла
                    </div>

                    <ActionBtn cancel={() => setSelectedCinemaHall(null)} save={() => handleSave()}/>
                </>
            }
        </div>
    );
}
