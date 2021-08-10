/** SHOWS MAP WIDGET */
import React from 'react';
import WidgetTitle from '../WidgetTitle/WidgetTitle';
import WidgetSubTitle from '../WidgetSubTitle/WidgetSubTitle';

export default function MapWidget({ maps }) {
  const { title, item } = maps;
  return (
    <div className='MapWidget'>
      <WidgetTitle text={title} />
      <WidgetSubTitle text={item} />
    </div>
  );
}
