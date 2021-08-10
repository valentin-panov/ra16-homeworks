/** SHOWS CURRENCY RATES STRING */
import React from 'react';
import HeaderCurrencyItem from './HeaderCurrencyItem/HeaderCurrencyItem';

function HeaderCurrency({ currencies, onClick }) {
  return (
    <ul className='HeaderCurrency'>
      {currencies.map((currency) => (
        <HeaderCurrencyItem
          key={currency.id}
          item={currency}
          onClick={onClick}
        />
      ))}
    </ul>
  );
}

export default HeaderCurrency;
