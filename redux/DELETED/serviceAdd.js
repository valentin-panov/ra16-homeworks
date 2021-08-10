import { SERVICE_EDIT } from '../actions/actionTypes';

const initialState = {
  name: '',
  price: '',
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case SERVICE_EDIT:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    default:
      return state;
  }
}
