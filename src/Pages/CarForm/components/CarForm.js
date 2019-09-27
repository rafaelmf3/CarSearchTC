import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import history from '../../../services/history';

import SideBar from '../../../components/SideBar';
import NavBar from '../../../components/NavBar';
import useCarContext from '../hooks/useCarContext';
import { formatPrice } from '../../../util/format';
import './CarForm.css';

export default function CarForm() {
  const { editingCar, setEditingCar } = useCarContext();

  const [car, setCar] = useState({
    title: undefined,
    model: undefined,
    brand: undefined,
    year: undefined,
    color: undefined,
    km: undefined,
    price: undefined,
  });
  const [brands, setBrands] = useState([]);

  const { title, model, brand, year, color, km, price } = car;

  useEffect(() => {
    function loadBrands() {
      api.get('/brands').then(({ data }) => {
        setBrands(data.brands.map(({ name }) => name));
      });
    }
    loadBrands();
    return () => {
      setEditingCar(undefined);
    };
  }, [setEditingCar]);

  useEffect(() => {
    setCar(editingCar || {});
  }, [editingCar]);

  function handleSubmit(e) {
    e.preventDefault();
    if (editingCar) {
      api.put(`/cars/${editingCar.id}`, {
        body: { car },
      });
    } else {
      api.post('/cars', {
        car,
      });
    }
    history.push('/cars');
  }

  function changeCarField(fieldName) {
    return ({ target: { value } }) => {
      setCar({
        ...car,
        [fieldName]: value,
      });
    };
  }

  function handleCancel() {
    history.push('/cars');
  }

  function handleRemove() {
    api.delete(`/cars/${editingCar.id}`).then(() => history.push('/cars'));
  }

  return (
    <div className="carFormContainer">
      <SideBar />
      <div className="carFormContent">
        <NavBar />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Título"
            name="title"
            value={title}
            onChange={changeCarField('title')}
            required
          />
          <div>
            <input
              type="text"
              placeholder="Modelo"
              name="model"
              value={model}
              onChange={changeCarField('model')}
              required
            />
            <input
              type="text"
              placeholder="Ano"
              name="year"
              value={year}
              onChange={changeCarField('year')}
              required
            />
          </div>
          <select value={brand} onChange={changeCarField('brand')} required>
            {brands.map(name => (
              <option>{name}</option>
            ))}
          </select>
          <div>
            <input
              type="text"
              placeholder="Cor"
              name="color"
              value={color}
              onChange={changeCarField('color')}
              required
            />
            <input
              type="text"
              placeholder="Preço"
              name="price"
              value={formatPrice(price)}
              onChange={changeCarField('price')}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Kilometragem"
              name="km"
              value={km}
              onChange={changeCarField('km')}
              required
            />
          </div>
          <div className="buttonsDiv">
            <div>
              {!!editingCar && (
                <button type="button" onClick={handleRemove}>
                  Remover
                </button>
              )}
              <button type="button" onClick={handleCancel}>
                Cancelar
              </button>
            </div>
            <button type="submit">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
