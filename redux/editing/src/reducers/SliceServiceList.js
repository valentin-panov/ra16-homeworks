import { createSlice } from '@reduxjs/toolkit';
import genID from '../utils/genID';

const initialState = {
  editItem: null,
  list: [
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
  ],
};

const counterSlice = createSlice({
  name: 'serviceList',
  initialState,
  reducers: {
    put(state, action) {
      state = action.payload;
    },
    save(state, action) {
      const { id } = action.payload;
      if (!id) {
        state.list.push({ ...action.payload, id: genID() });
      } else {
        const idx = state.list.findIndex((i) => i.id === id);
        state.list[idx] = action.payload;
      }
      state.editItem = null;
    },
    edit(state, action) {
      const { id } = action.payload;
      state.editItem = state.list.find((i) => i.id === id);
    },

    remove(state, action) {
      const { id } = action.payload;
      const editId = state.editItem ? state.editItem.id : null;
      if (editId === id) {
        state.editItem = null;
      }
      const idx = state.list.findIndex((i) => i.id === id);
      state.list.splice(idx, 1);
    },
    reset(state, action) {
      state.editItem = null;
    },
  },
});

export const { edit, save, remove, reset } = counterSlice.actions;
export default counterSlice.reducer;
