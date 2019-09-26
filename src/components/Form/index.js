import React, { useState } from 'react';
import api from '../../services/api';

import { formatPrice } from '../../util/format';
import './index.css';

export default function Form({ callbackData }) {
  const [title, setTitle] = useState('');
  const [model, setModel] = useState('');
  const [brand, setBrand] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');
  const [km, setKm] = useState('');
  const [price, setPrice] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    return callbackData({
      car: {
        title,
        model,
        brand,
        year,
        color,
        km,
        price,
      },
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        name="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <div>
        <input
          type="text"
          placeholder="Modelo"
          name="model"
          value={model}
          onChange={e => setModel(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ano"
          name="year"
          value={year}
          onChange={e => setYear(e.target.value)}
        />
      </div>
      <select>
        <option>VW</option>
      </select>
      <div>
        <input
          type="text"
          placeholder="Cor"
          name="color"
          value={color}
          onChange={e => setColor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Preço"
          name="price"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Kilometragem"
          name="km"
          value={km}
          onChange={e => setKm(e.target.value)}
        />
      </div>
      <div className="buttonsDiv">
        <div>
          <button type="button">Remover</button>
          <button type="button">Cancelar</button>
        </div>
        <button type="submit">Salvar</button>
      </div>
    </form>
  );
}
