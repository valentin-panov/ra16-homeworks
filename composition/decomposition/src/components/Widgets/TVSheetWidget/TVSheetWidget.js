/** RENDERS TV SHEET WIDGET */
import React from 'react';
import TVSheetWidgetItem from './TVSheetWidgetItem/TVSheetWidgetItem';
import WidgetTitle from '../WidgetTitle/WidgetTitle';

export default function TVSheetWidget({ tvSheet }) {
  const { title, items } = tvSheet;
  return (
    <div className='TVSheetWidget'>
      <WidgetTitle text={title} />
      <span className='TVSheetWidget_onTheAir'>Эфир</span>
      <ul className='TVSheetWidget_list'>
        {items.map((item) => (
          <TVSheetWidgetItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
