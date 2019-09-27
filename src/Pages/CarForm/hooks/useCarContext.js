import { useContext } from 'react';
import carContext from '../context/carContext';

export default function useCarContext() {
  return useContext(carContext);
}
