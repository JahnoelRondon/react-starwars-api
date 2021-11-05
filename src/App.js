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
    
    swServices.getAllStarShips(this.state.baseurl)
    .then(starships => this.setState({
      starships
    }))

  }

  render(){
    console.log(this.state.starships)
    return (
      <div className="App">
        hello
      </div>
    );    
  }

}

export default App;
