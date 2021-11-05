import './App.css';
import React, {Component} from 'react'
import * as swServices from './services/sw-api'

class App extends Component {

  state = {
    baseurl: process.env.REACT_APP_BASEURL,
    search: '',
    endPoint: ''
  }

  componentDidMount(){
    console.log(this.state.baseurl)
    
    swServices.getAllStarShips(this.state.baseurl)
  }

  render(){
    return (
      <div className="App">
        hello
      </div>
    );    
  }

}

export default App;
