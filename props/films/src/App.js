import React from 'react';
import './App.css';
import Stars from './components/Stars/Stars';
function App() {
  return (
    <div className='App'>
      <Stars count={1} />
      <Stars count={5} />
      <Stars count={0} />
      <Stars count={'a'} />
    </div>
  );
}

export default App;
