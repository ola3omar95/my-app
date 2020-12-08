import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Shop from './components/pages/Shop';
import BestOffers from './components/pages/BestOffers';
import SignUp from './components/pages/SignUp';
import { Button } from '@material-ui/core';



function App() {
  return (
    <>
      <div className="App">
        <Button color="primary" variant="outlined"> This is our first button</Button>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={ Home } />
            <Route path='/shop' component={ Shop } />
            <Route path='/best-offers' component={ BestOffers } />
            <Route path='/sign-up' component={ SignUp } />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
