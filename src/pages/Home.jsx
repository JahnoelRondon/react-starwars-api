import {Link} from 'react-router-dom'

function Home({starships}){
    return (
        <div className="shipContainer">
        {
          starships.map((ship, ind) => (

            <Link to='/shipDetail' className='ships' key={ind}>{ship.name}</Link>
          ))
        }
        </div>
    )
}

export default Home