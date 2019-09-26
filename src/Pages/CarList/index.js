import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import SideBar from '../../components/SideBar';
import NavBar from '../../components/NavBar';

import './index.css';

export default function CarList() {
  const [car, setCar] = useState('');
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    async function apiCall() {
      const { data } = await api.get('/cars', {
        params: {
          search: car,
        },
      });
      setCarList(data.cars);
    }

    apiCall();
  }, [car]);

  function searchCar(value) {
    setCar(value);
  }

  return (
    <div
      className="container"
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
        <NavBar callbackParent={value => searchCar(value)} />
        <table>
          <tbody>
            {carList.map(item => {
              return [
                <tr
                  onClick={() => {
                    console.tron.log('hello');
                  }}
                >
                  <td className="modelo">
                    <p
                      style={{
                        fontSize: '18px',
                        fontWeight: 'bold',
                      }}
                    >
                      {item.title}
                    </p>
                    <p>
                      <strong>
                        {item.model} * {item.brand} * {item.km} KM
                      </strong>
                    </p>
                  </td>

                  <td
                    className="price"
                    style={{
                      textAlign: 'right',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '18px',
                        fontWeight: 'bold',
                      }}
                    >
                      R$ {item.price}
                    </p>
                    <p>
                      <strong>{item.year}</strong>
                    </p>
                  </td>
                </tr>,
                <hr />,
              ];
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
