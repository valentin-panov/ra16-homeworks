/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import SheetRow from './SheetRow/SheetRow';

function SheetBody(props) {
  const { form, handleDelete } = props;
  return (
    <div className='SheetBody'>
      {form.map((item) => (
        <SheetRow key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

SheetBody.propTypes = {};

export default SheetBody;
