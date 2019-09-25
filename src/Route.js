import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import './config/ReactotronConfig';

import history from './services/history';

import Home from './Pages/Home';
import CarList from './Pages/CarList';
import CarDetails from './Pages/CarDetails';

export default function App() {
  return (
    <Router history={history}>
      <Route path="/" exact component={Home} />
      <Route path="/cars" component={CarList} />
      <Route path="/details" component={CarDetails} />
    </Router>       
  )
}