import React, { useEffect, useState, Fragment } from 'react';

import api from '../../services/api';

import useCarContext from '../CarForm/hooks/useCarContext';
import history from '../../services/history';
import SideBar from '../../components/SideBar';
import NavBar from '../../components/NavBar';

import { formatPrice } from '../../util/format';

import './index.css';

export default function CarList() {
  const [carFilter, setCarFilter] = useState('');
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    async function apiCall() {
      const { data } = await api.get('/cars', {
        params: {
          search: carFilter,
        },
      });
      setCarList(data.cars);
    }

    apiCall();
  }, [carFilter]);

  const { setEditingCar } = useCarContext();

  function searchCar(value) {
    setCarFilter(value);
  }

  function handleEditCar(car) {
    return () => {
      setEditingCar(car);
      history.push('/newcar');
    };
  }

  return (
    <div className="carListContainer">
      <SideBar />
      <div className="carListContent">
        <NavBar callbackParent={value => searchCar(value)} />
        <table>
          <tbody>
            {carList.map(item => {
              const { id } = item;
              return [
                <Fragment key={id}>
                  <tr onClick={handleEditCar(item)}>
                    <td className="modelo">
                      <h2>
                        <strong>{item.title}</strong>
                      </h2>
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
                      <h2>{formatPrice(item.price)}</h2>
                      <p>
                        <strong>{item.year}</strong>
                      </p>
                    </td>
                  </tr>
                  <hr />
                </Fragment>,
              ];
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
