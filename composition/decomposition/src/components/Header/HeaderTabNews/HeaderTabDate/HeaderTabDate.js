/** SHOWS ACTUAL DATE */
import React from 'react';
import formatDate from '../../../../utils/formatDate';

export default function HeaderTabDate() {
  const now = formatDate(new Date());
  return <div className='HeaderTabDate'>{now}</div>;
}
