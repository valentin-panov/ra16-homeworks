/** RENDERS CATEGORIES OF THE SEARCH */
import React from 'react';
import SearchCategoryItem from './SearchCategoryItem/SearchCategoryItem';

export default function SearchCategory({ searchCategories, onClick }) {
  return (
    <div className='SearchCategory'>
      {searchCategories.map((category) => (
        <SearchCategoryItem
          key={category.id}
          title={category.title}
          link={category.link}
          selected={category.selected}
          onClick={onClick}
        />
      ))}
    </div>
  );
}
