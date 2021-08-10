/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

function CustomInput(props) {
  const { item, onChangeHandler } = props;
  const { inputName, inputLabel, inputType, placeholder } = item;
  return (
    <div className='CustomInput'>
      <label htmlFor={inputName} className='CustomInput__label'>
        {inputLabel}
      </label>
      <input
        className='CustomInput__text'
        id={inputName}
        name={inputName}
        type={inputType}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
}

CustomInput.propTypes = {};

export default CustomInput;
