/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import SheetHead from './SheetHead/SheetHead';
import SheetBody from './SheetBody/SheetBody';

function Sheet(props) {
  const { form, handleDelete } = props;
  return (
    <div>
      <SheetHead />
      <SheetBody form={form} handleDelete={handleDelete} />
    </div>
  );
}

Sheet.propTypes = {};

export default Sheet;
