/** RENDERS POPELAR WIDGET */

import React from 'react';
import PopularWidgetItem from './PopularWidgetItem/PopularWidgetItem';
import WidgetTitle from '../WidgetTitle/WidgetTitle';

export default function PopularWidget({ popular }) {
  const { title, items } = popular;
  return (
    <div className='PopularWidget'>
      <WidgetTitle text={title} />
      <ul className='PopularWidget_list'>
        {items.map((item) => (
          <PopularWidgetItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
