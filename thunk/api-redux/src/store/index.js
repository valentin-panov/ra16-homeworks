import { configureStore } from '@reduxjs/toolkit';
import serviceList from '../reducers/SliceServiceList';
// import { applyMiddleware } from 'redux';

const logger = (store) => (next) => (action) => {
  console.log('dispatchin', action);
  console.log('prev_state', store.getState());
  let result = next(action);
  console.log('nexxt_state', store.getState());
  return result;
};

export default configureStore({
  reducer: { serviceList },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
