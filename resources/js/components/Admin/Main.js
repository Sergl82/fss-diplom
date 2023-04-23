import Header from "./Header";
import StepHeader from "./Header/stepHeader";
import CinemaHallControl from "./AdminPanel/cinemaHallControl";
import CinemaHallConfig from "./AdminPanel/cinemaHallConfig";
import PriceConfig from "./AdminPanel/priceConfig";
import SessionGrid from "./AdminPanel/sessionGrid";
import OpenSales from "./AdminPanel/openSales";
import Popup from "./Popup";

export default function Main() {
    return (
        <>
            <Popup/>
            <Header/>
            <main className="conf-steps">
                <StepHeader title={'Управление залами'}>
                    <CinemaHallControl/>
                </StepHeader>

                <StepHeader title={'Конфигурация залов'}>
                    <CinemaHallConfig/>
                </StepHeader>

                <StepHeader title={'Конфигурация цен'}>
                    <PriceConfig/>
                </StepHeader>

                <StepHeader title={'Сетка сеансов'}>
                    <SessionGrid/>
                </StepHeader>

                <StepHeader title={'Открыть продажи'}>
                    <OpenSales/>
                </StepHeader>
            </main>
        </>
    );
}
