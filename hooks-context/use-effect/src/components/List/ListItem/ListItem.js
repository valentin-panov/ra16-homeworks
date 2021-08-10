import React from 'react';

export default function ListItem({ item, getUserIdHandler }) {
  return (
    <li
      className={'list_item ' + (item.active ? 'active' : '')}
      onClick={() => {
        getUserIdHandler(item.id);
      }}
    >
      {item.name}
    </li>
  );
}
