/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

function CustomInput(props) {
  const { inputName, handleChange } = props;
  return (
    <div className='CustomInput'>
      <label htmlFor={inputName} className='CustomInput__label'>
        {inputName === 'date' ? 'Дата (ДД.ММ.ГГГ)' : 'Пройдено км'}
      </label>
      <input
        className='CustomInput__text'
        type='text'
        id={inputName}
        name={inputName}
        onChange={handleChange}
      />
    </div>
  );
}

CustomInput.propTypes = {};

export default CustomInput;
