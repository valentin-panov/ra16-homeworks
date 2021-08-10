/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button/Button';
import CustomInput from './CustomInput/CustomInput';

function InputField(props) {
  const { onChangeHandler, onSubmitHandler, inputData, btnText } = props;
  return (
    <form className='InputField' onSubmit={onSubmitHandler}>
      {inputData.map((item) => (
        <CustomInput
          key={item.id}
          item={item}
          onChangeHandler={onChangeHandler}
        />
      ))}
      <Button text={btnText} />
    </form>
  );
}

InputField.propTypes = {};

export default InputField;
