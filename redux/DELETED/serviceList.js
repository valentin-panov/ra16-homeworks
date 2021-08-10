import { SERVICE_ADD, SERVICE_REMOVE } from '../actions/actionTypes';
import genID from '../utils/genID';

const initialState = [
  {
    name: 'Замена стекла',
    price: '21 000',
    id: `${genID()}`,
  },
  {
    name: 'Замена дисплея',
    price: '25 000',
    id: `${genID()}`,
  },
  {
    name: 'Замена аккумулятора',
    price: '4 000',
    id: `${genID()}`,
  },
  {
    name: 'Замена микрофона',
    price: '5 500',
    id: `${genID()}`,
  },
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case SERVICE_ADD:
      const { name, price } = action.payload;
      return [...state, { id: genID(), name, price: Number(price) }];

    case SERVICE_REMOVE:
      const { id } = action.payload;
      return state.filter((i) => i.id !== id);

    // case SERVICE_EDIT:
    //   const changed = state.find((o) => o.id === id);
    //   changed.name = name;
    //   changed.price = price;

    //   return [...state, changed];

    default:
      return state;
  }
}
