import React from 'react';
import { Link } from 'react-router-dom';

import history from '../../services/history';

import './index.css';

export default function NavBar({ callbackParent }) {
  return (
    <div>
      <div className="container">
        <Link className="link" to="/cars">
          <input
            className="searchInput"
            type="text"
            placeholder="Pesquise por um veículo"
            autoComplete={false}
            onChange={e => callbackParent(e.target.value)}
          />
        </Link>
        <button
          className="formButton"
          onClick={() => history.push('/newcar')}
          type="button"
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
}
