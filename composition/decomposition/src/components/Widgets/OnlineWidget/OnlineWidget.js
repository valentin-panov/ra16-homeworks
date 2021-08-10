/** now on the air widget */
import React from 'react';
import OnlineWidgetItem from './OnlineWidgetItem/OnlineWidgetItem';
import WidgetTitle from '../WidgetTitle/WidgetTitle';

export default function OnlineWidget({ online }) {
  const { title, items } = online;
  return (
    <div>
      <WidgetTitle text={title} />
      <ul className='OnlineWidget'>
        {items.map((item) => (
          <OnlineWidgetItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
