/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Actions from './Actions/Actions';

function SheetRow(props) {
  const { date, distance, id } = props.item;
  const { handleDelete } = props;
  return (
    <div className='SheetRow'>
      <div className='SheetRow__el'>{date}</div>
      <div className='SheetRow__el'>{distance}</div>
      <Actions id={id} handleDelete={handleDelete} />
    </div>
  );
}

SheetRow.propTypes = {};

export default SheetRow;
