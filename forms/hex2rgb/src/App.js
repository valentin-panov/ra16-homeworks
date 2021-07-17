import './App.css';
import React, { useState } from 'react';
import Converter from './components/Converter/Converter';
import hex2rgb from './utils/hex2rgb';

function App() {
  const [form, setForm] = useState({
    hex: '',
    rgb: 'rgb(255, 255, 255)',
  });

  const prefix = '#';

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let rgbIn = evt.target.textContent;
    setForm((prevForm) => ({ ...prevForm, rgb: rgbIn }));
  };

  const handleHexChange = (evt) => {
    let input = evt.target.value;
    if (input.substr(1, 1) === '#') {
      input = input.substr(1);
    }
    if (input.length > 7) {
      input = input.substr(0, 7);
    }
    input = prefix + input.substr(prefix.length);
    setForm((prevForm) => ({ ...prevForm, hex: input }));

    let rgbNum = hex2rgb(input.substr(prefix.length));
    if (rgbNum) {
      setForm((prevForm) => ({ ...prevForm, rgb: `rgb(${rgbNum})` }));
    } else {
      setForm((prevForm) => ({ ...prevForm, rgb: 'Ошибка!' }));
    }
  };

  return (
    <div
      className='App'
      style={{ backgroundColor: form.rgb === 'Ошибка!' ? 'red' : form.rgb }}
    >
      <Converter
        handleSubmit={handleSubmit}
        handleHexChange={handleHexChange}
        form={form}
        prefix={prefix}
      />
    </div>
  );
}

export default App;
