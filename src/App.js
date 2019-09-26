import React from 'react';
import { Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import Routes from './routes';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';

import history from './services/history';
// import store from './store';

function App() {
  return (
    // <Provider store={store}>
    <Router history={history}>
      {/* <SideBar />
      <NavBar /> */}
      <Routes />
      {/* <ToastContainer /> */}
    </Router>
    // </Provider>
  );
}

export default App;
