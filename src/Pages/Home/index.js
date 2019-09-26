import React from 'react';

import { Link } from 'react-router-dom';

import '../../assets/styles/Shared.css';
import SideBar from '../../components/SideBar';
import NavBar from '../../components/NavBar';
import car from '../../assets/img/car-wireframe.png';

import './index.css';

export default function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
      }}
    >
      <SideBar />
      <div
        style={{
          width: '100%',
          height: '100px',
          backgroundColor: '#1A2433',
        }}
      >
        <div style={{}}>
          <div
            style={{
              marginTop: '25px',
              display: 'flex',
              marginLeft: '40px',
            }}
          >
            <Link
              to="/cars"
              style={{
                width: '75%',
                height: '38px',
              }}
            >
              <input
                type="text"
                placeholder="Pesquise por um veículo"
                style={{
                  backgroundColor: '#1A2433',
                  color: '#ddd',
                  border: '1.5px solid #AAA',
                  borderRadius: '3px',
                  width: '100%',
                  height: '38px',
                  fontSize: '16px',
                  fontWeight: 600,
                  paddingLeft: '10px',
                  fontFamily: 'Roboto',
                }}
              />
            </Link>
            <Link to="/details">
              <button
                type="button"
                style={{
                  border: 0,
                  borderRadius: '3px',
                  height: '40px',
                  fontSize: '16px',
                  fontWeight: 500,
                  marginLeft: '15px',
                  width: '120px',

                  marginRight: '20px',
                }}
              >
                Cadastrar
              </button>
            </Link>
          </div>
        </div>
        <div
          className="banner"
          style={{
            display: 'flex',
            justifyContent: 'center',
            flex: 1,
          }}
        >
          <p
            id="title"
            style={{
              marginTop: '100px',
            }}
          >
            Pesquisa de veículos <br /> do <span> TradersClub </span>
          </p>
        </div>
      </div>
    </div>
  );
}
