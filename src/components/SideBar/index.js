import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';
import logotc from '../../assets/img/logo-tc.png';

export default function SideBar() {
  return (
    <div className="sidecontainer">
      <Link to="/">
        <img className="image" src={logotc} alt="logotc" />
      </Link>
    </div>
  );
}
