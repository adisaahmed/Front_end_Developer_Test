import React, { Component } from 'react';
import People from './components/People';
import Header from './components/Header';
import Planets from './components/Planets';
import Starships from './components/Starships';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact strict component={Header}></Route>
        <Route path="/" exact strict component={People}></Route>



        <Route path="/planets" exact strict component={Header}></Route>
        <Route path="/planets" exact strict component={Planets}></Route>

        <Route path="/starships" exact strict component={Header}></Route>
        <Route path="/starships" exact strict component={Starships}></Route>
      </Router>
    );
  }
}


export default App;