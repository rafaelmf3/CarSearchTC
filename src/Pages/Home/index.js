import React from 'react';

import '../../assets/styles/Shared.css';
import SideBar from '../../components/SideBar';
import NavBar from '../../components/NavBar';

import './index.css';

export default function App() {
  return (
    <div className="homeContainer">
      <SideBar />
      <div className="homeContent">
        <NavBar />
        <div className="banner">
          <p className="title">
            Pesquisa de veículos <br /> do <span> TradersClub </span>
          </p>
        </div>
      </div>
    </div>
  );
}
