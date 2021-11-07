import { useLocation } from "react-router"

function Detail(){
    let location = useLocation().state.ship;

    return(
        <h1>detail page</h1>
    )
}

export default Detail