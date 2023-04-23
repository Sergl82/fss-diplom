export default function ChooseOpenHalls(props) {
    const {id, name, free, callback} = props;

    return (
        <>
            <input
                id={`cinemaHallCheck${id}`}
                className="conf-step__custom-checkbox"
                type="checkbox"
                checked={free}
                onChange={callback}
            />
            <label htmlFor={`cinemaHallCheck${id}`}>{name}</label>
        </>
    );
}
