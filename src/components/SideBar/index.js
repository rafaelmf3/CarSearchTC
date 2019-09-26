import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';
import logotc from '../../assets/img/logo-tc.png';

export default function SideBar() {
  return (
    <div
      style={{
        backgroundColor: '#0E1823',
        width: '400px',
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Link to="/">
        <img
          src={logotc}
          alt="logotc"
          style={{ height: '80px', marginTop: '50px' }}
        />
      </Link>
    </div>
  );
}
