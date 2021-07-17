/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

function Actions({ handleDelete, id }) {
  return (
    <div className='Actions'>
      <img
        src='https://img.icons8.com/material/24/000000/delete-sign--v1.png'
        alt='delete'
        data-id={id}
        onClick={handleDelete}
      />
    </div>
  );
}

Actions.propTypes = {};

export default Actions;
