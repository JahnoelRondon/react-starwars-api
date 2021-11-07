import { useLocation } from "react-router"

function Detail(){
    let ship = useLocation().state.ship;

    return(
        <div className='detail'>
            <h1>{ship.name}</h1>
            <p><span>Manufacturer:</span> {ship.manufacturer}</p>
            <p><span>Model:</span> {ship.model}</p>
            <p><span>Class:</span> {ship.starship_class}</p>
            <br/>
            <h3>Technical Specifics</h3>
            <p><span>Length:</span> {ship.length} meters</p>
            <p><span>Crew:</span> {ship.crew}</p>
            <p><span>Passengers:</span> {ship.passengers}</p>
            <p><span>Maximum atmospheric speed:</span> {ship.max_atmosphering_speed} kph</p>
        </div>
    )
}

export default Detail