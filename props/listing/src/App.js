import React from 'react';
import './App.css';
import './css/main.css';
import json from './data/etsy.json';
import Listing from './components/Listing/Listing';

function App() {
  return (
    <div className='App'>
      <Listing items={json} />
    </div>
  );
}

export default App;
