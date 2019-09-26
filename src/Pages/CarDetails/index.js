import React from 'react';

import api from '../../services/api';

import SideBar from '../../components/SideBar';
import NavBar from '../../components/NavBar';
import Form from '../../components/Form';

export default function CarDetails() {
  function editCar(e) {
    async function carCreateOrEdit() {
      const { data } = await api.post('/cars', {
        e,
      });
      console.tron.log(data);
    }
    carCreateOrEdit();
  }

  return (
    <div
      style={{
        display: 'flex',
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
        <NavBar />
        <Form callbackData={e => editCar(e)} />
      </div>
    </div>
  );
}
