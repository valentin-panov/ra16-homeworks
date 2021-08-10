/** RENDERS SINGLE SEARCH CATEGORY */
import React from 'react';

export default function SearchCategoryItem({ link, title, onClick, selected }) {
  return (
    <a
      className={
        'SearchCategoryItem ' +
        (selected
          ? 'SearchCategoryItem_selected'
          : 'SearchCategoryItem_unselected')
      }
      href={link}
      onClick={onClick}
    >
      {title}
      <span>&nbsp;</span>
    </a>
  );
}
