import './App.css';
import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Detail from './pages/Detail'
import * as swServices from './services/sw-api'

class App extends Component {

  state = {
    baseurl: process.env.REACT_APP_BASEURL,
    searchTitle: 'starships',
    searchUrl: ''
  }

  componentDidMount(){
    
    swServices.getAllStarShips(this.state.baseurl + this.state.searchTitle)
    .then(starships => this.setState({
      starships
    }))

  }

  render(){
    console.log(this.state.starships)
    
    return (
    <Router>
      {/* put this container in a component for the route to "/" */}
      <div className="shipContainer">

        {
        this.state.starships ? 
          
          this.state.starships.map((ship, ind) => (

            <Link to='/shipDetail' className='ships' key={ind}>{ship.name}</Link>
          ))
          
          :

          ''
        }

        <Routes>
          <Route path='/shipDetail' element={<Detail />}/>
        </Routes>

      </div>
    </Router>
    );    
  }

}

export default App;
