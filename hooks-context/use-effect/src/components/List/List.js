import React from 'react';
import ListItem from './ListItem/ListItem';

export default function List({ list, getUserIdHandler }) {
  return (
    <div className='list_container'>
      <ul className='list'>
        {list.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            getUserIdHandler={getUserIdHandler}
          />
        ))}
      </ul>
    </div>
  );
}
