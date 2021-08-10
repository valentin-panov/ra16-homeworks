/** RENDERS SEARCH FORM*/
import React from 'react';
import SearchCategory from './SearchCategory/SearchCategory';
import SearchLogo from './SearchLogo/SearchLogo';
import SearchField from './SearchField/SearchField';
import SearchBtn from './SearchBtn/SearchBtn';
import SearchSubstring from './SearchSubstring/SearchSubstring';

export default function SearchForm({
  searchCategories,
  onClick,
  searchSubstring,
  searchLogo,
}) {
  return (
    <div className='SearchForm'>
      <SearchCategory searchCategories={searchCategories} onClick={onClick} />
      <SearchLogo searchLogo={searchLogo} />
      <SearchField />
      <SearchBtn onClick={onClick} />
      <SearchSubstring searchSubstring={searchSubstring} />
    </div>
  );
}
