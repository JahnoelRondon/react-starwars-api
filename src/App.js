import './App.css';
import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
      <div className="shipContainer">

        {
        this.state.starships ? 
          
          this.state.starships.map((ship, ind) => (

            <p className='ships' key={ind}>{ship.name}</p>
          ))
          
          :

          ''
        }

      </div>
    </Router>
    );    
  }

}

export default App;
