import { createSlice } from '@reduxjs/toolkit';

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
