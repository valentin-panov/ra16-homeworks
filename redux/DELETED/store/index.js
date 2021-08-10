import { combineReducers, createStore } from 'redux';
import serviceAddReducer from '../reducers/serviceAdd';
import serviceListReducer from '../reducers/serviceList';

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceAdd: serviceAddReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
