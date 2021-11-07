import {Link} from 'react-router-dom'
import React, {Component} from 'react'
import * as swServices from './../services/sw-api'
// add base url

class Home extends Component{

  state = {
    starships: []
  }

  componentDidMount(){
    console.log('home did mount');

    swServices.getAllStarShips()
    .then(starships => this.setState({
      starships
    }))

  }

  render(){
    console.log(this.state.starships);
      return (
          <div className="shipContainer">
          {
            this.state.starships.map((ship, ind) => (

              <Link className='ships' key={ind} 
              to='shipDetail'
              state={{ship}}
              >
              {ship.name}</Link>
            ))
          }
          </div>
      )    
  }


}

export default Home