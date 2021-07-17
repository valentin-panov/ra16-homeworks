/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button/Button';
import CustomInput from './CustomInput/CustomInput';

function InputField(props) {
  const { handleSubmit, handleChange } = props;
  return (
    <form className='InputField' onSubmit={handleSubmit}>
      <CustomInput inputName='date' handleChange={handleChange} />
      <CustomInput inputName='distance' handleChange={handleChange} />
      <Button />
    </form>
  );
}

InputField.propTypes = {};

export default InputField;
