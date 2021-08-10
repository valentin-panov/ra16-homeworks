import React from 'react';

export default function SearchBtn({ onClick }) {
  return (
    <input
      type='button'
      className='SearchBtn'
      value='Найти'
      onClick={onClick}
    />
  );
}
