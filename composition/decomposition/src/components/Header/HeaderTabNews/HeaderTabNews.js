/** HEADER TAB - NEWS AND DATE */
import React from 'react';
import HeaderTabDate from './HeaderTabDate/HeaderTabDate';
import HeaderTabItem from './HeaderTabItem/HeaderTabItem';

export default function HeaderTabNews({ headerTabs, onClick }) {
  return (
    <div className='HeaderTabNews'>
      {headerTabs.map((tab) => (
        <HeaderTabItem
          key={tab.id}
          title={tab.title}
          link={tab.link}
          selected={tab.selected}
          news={tab.news}
          onClick={onClick}
        />
      ))}

      <HeaderTabDate />
    </div>
  );
}
