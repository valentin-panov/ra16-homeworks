/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

function ImageCap({ imgSrc, alt }) {
  return (
    <div className='ImageCap'>
      <img className='ImageCap_img' src={imgSrc} alt={alt} />
    </div>
  );
}

ImageCap.propTypes = {};

export default ImageCap;
