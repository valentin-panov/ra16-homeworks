import React from 'react';

export default function PopularWidgetItem({ item }) {
  const { theme, name } = item;
  return (
    <li className='PopularWidgetItem'>
      <span>{theme}&nbsp;-</span>
      <span>&nbsp;{name}</span>
    </li>
  );
}
