/**RENDERS HEADER - NEWS TAB AND ONE WIDGET */
import React from 'react';
import HeaderTabNews from './HeaderTabNews/HeaderTabNews';
import ErrorWidget from '../Widgets/ErrorWidget/ErrorWidget';
import HeaderCurrency from './HeaderCurrency/HeaderCurrency';

export default function Header({ headerTabs, currencies, onClick }) {
  return (
    <div className='Header'>
      <HeaderTabNews headerTabs={headerTabs} onClick={onClick} />
      <HeaderCurrency currencies={currencies} onClick={onClick} />
      <ErrorWidget />
    </div>
  );
}
