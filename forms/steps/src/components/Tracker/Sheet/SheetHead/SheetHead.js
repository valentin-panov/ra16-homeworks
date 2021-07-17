/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

function SheetHead(props) {
  return (
    <div className='SheetHead'>
      <div>Дата (ДД.ММ.ГГГ)</div>
      <div>Пройдено км</div>
      <div>Действия</div>
    </div>
  );
}

SheetHead.propTypes = {};

export default SheetHead;
