/** RENDERS STRING UNDER SEARCH INPUT */
import React from 'react';

export default function SearchSubstring({ searchSubstring }) {
  return (
    <div className='SearchSubstring'>
      <span>{searchSubstring[0]}</span>
      <span>{searchSubstring[1]}</span>
    </div>
  );
}
