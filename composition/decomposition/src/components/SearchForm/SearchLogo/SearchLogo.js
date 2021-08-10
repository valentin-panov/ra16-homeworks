/** RENDERS LOGO */
import React from 'react';

export default function SearchLogo({ searchLogo }) {
  return (
    <div className='SearchLogo'>
      <img src={searchLogo} alt='logo' style={{ width: '100px' }} />
    </div>
  );
}
