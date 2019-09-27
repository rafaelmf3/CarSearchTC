import React, { useState } from 'react';
import { Router, Route } from 'react-router-dom';

import carContext from './Pages/CarForm/context/carContext';
import './config/ReactotronConfig';

import history from './services/history';

import Home from './Pages/Home';
import CarList from './Pages/CarList';
import CarForm from './Pages/CarForm';

export default function App() {
  const [editingCar, setEditingCar] = useState();
  return (
    <carContext.Provider value={{ editingCar, setEditingCar }}>
      <Router history={history}>
        <Route path="/" exact component={Home} />
        <Route path="/cars" component={CarList} />
        <Route path="/newcar" component={CarForm} />
      </Router>
    </carContext.Provider>
  );
}
