import './App.css';
import React, {Component} from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";

import Detail from './Detail'
import Home from './Home';
import Nav from './../components/Nav';

class App extends Component {

  state = {
    baseurl: 'https://swapi.dev/api/'
  }

  render(){
    
    return (
      <>
        
        <Nav />

        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>

        <Routes>
          <Route path='/shipDetail' element={<Detail />}/>
        </Routes> 

        </>
    );    
  }

}

export default App;
