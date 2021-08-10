/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <div className='Button'>
      <button type='submit' className='btn'>
        {props.text}
      </button>
    </div>
  );
}

Button.propTypes = {};

export default Button;
