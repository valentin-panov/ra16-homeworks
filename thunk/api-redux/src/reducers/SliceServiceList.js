import { createSlice } from '@reduxjs/toolkit';
import genID from '../utils/genID';

const initialState = {
  items: [],
  status: 'idle', // | 'pending' | 'error' | 'loading' | 'success',
  editItem: null,
  filter: null,
};

const counterSlice = createSlice({
  name: 'serviceList',
  initialState,
  reducers: {
    put(state, action) {
      state = action.payload;
    },
    save(state, action) {
      const { id, name, price } = action.payload;
      if (!id && name && price) {
        state.items.push({ ...action.payload, id: genID() });
      } else if (name && price) {
        const idx = state.items.findIndex((i) => i.id === id);
        state.items[idx] = action.payload;
      }
      state.editItem = null;
    },
    edit(state, action) {
      const { id } = action.payload;
      state.editItem = state.items.find((i) => i.id === id);
    },
    remove(state, action) {
      const { id } = action.payload;
      const editId = state.editItem ? state.editItem.id : null;
      if (editId === id) {
        state.editItem = null;
      }
      const idx = state.items.findIndex((i) => i.id === id);
      state.items.splice(idx, 1);
    },
    reset(state, action) {
      state.editItem = null;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    fetchStart(state, action) {
      return { ...state, status: 'pending' };
    },
    fetchSuccess(state, action) {
      return { ...state, status: 'success' };
    },
    fetchError(state, action) {
      return { ...state, status: 'error' };
    },
  },
});

export const { edit, save, remove, reset, setFilter } = counterSlice.actions;
export default counterSlice.reducer;
