import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
import Player from './components/Player';
import axiosWithAuth from './components/axiosWithAuth';



class App extends React.Component {

  constructor() {
    super();
    this.state= {
      players:[],
      country: '',
      searches: ''
    }
    console.log('constructor is running')
  }

  componentDidMount() {
    console.log('CDM is running')
      axiosWithAuth().get('players')
     .then(response => {
      console.log('data: ', response.data)
      this.setState({
        players: response.data
      })
    })
     .catch(error => {
      console.log('error: ', error)
    })
  }

  componentDidUpdate(prevState) {
    if(prevState.players !== this.state.players){
      console.log('CDU is running')
    }
  }

  render() {
  return (
    <div className="App">
      <header>Team USA Search Results</header>
      <Player player={this.state.players}/>
    </div>
  );
}
}

export default App;
