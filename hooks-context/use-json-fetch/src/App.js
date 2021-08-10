import React from 'react';
import Loading from './components/Loading/Loading';
import Error from './components/Error/Error';
import Success from './components/Success/Success';

// const baseURL = 'https://ra-http-crud.herokuapp.com/';
const baseURL = 'http://localhost:7070/';

export default function App() {
  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='container_column'>
          <Loading baseURL={baseURL} />
          <Error baseURL={baseURL} />
          <Success baseURL={baseURL} />
        </div>
      </div>
    </div>
  );
}
