/** RENDERS EVERY ITEM OF TV SHEET */
import React from 'react';

function TVSheetWidgetItem({ item }) {
  const { time, title, channel } = item;
  return (
    <li className='TVSheetWidgetItem'>
      <span>{time}&nbsp;</span>
      <span>{title}&nbsp;</span>
      <span>{channel}&nbsp;</span>
    </li>
  );
}

export default TVSheetWidgetItem;
