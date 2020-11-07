import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <div className="App">
      
      
      
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/beers" component={Beers}/>
        <Route exact path="/random-beer" component={RandomBeer}/>
        <Route exact path="/new-beer" component={NewBeer}/>
      </Switch>
    </div>
  );
}

export default App;
