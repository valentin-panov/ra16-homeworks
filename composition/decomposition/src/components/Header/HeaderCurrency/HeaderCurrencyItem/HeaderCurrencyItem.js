/** RENDERS SINGLE CURRENCY ITEM */
import React from 'react';

export default function HeaderCurrencyItem({ item, onClick }) {
  const { currency, rate, move } = item;
  return (
    <li className='HeaderCurrencyItem' onClick={onClick}>
      <span>{currency}</span>
      {rate && <span>&nbsp;{rate}</span>}
      {move && <span>&nbsp;{move}</span>}
    </li>
  );
}
