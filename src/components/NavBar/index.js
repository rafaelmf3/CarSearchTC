import React from 'react';
import { Link } from 'react-router-dom';

import history from '../../services/history';

import './index.css';

export default function NavBar({ callbackParent }) {
  // function handleListCar(value) {
  //   return value;
  // }

  return (
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
            autoComplete={false}
            onChange={e => callbackParent(e.target.value)}
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
        <button
          onClick={() => history.push('/newcar')}
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
      </div>
    </div>
  );
}
