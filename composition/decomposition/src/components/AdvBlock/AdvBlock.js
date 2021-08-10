/**RENDERS BANNER UNDER THE SEARCH FORM */
import React from 'react';

export default function AdvBlock({ props }) {
  const { bannerLink, bannerImg, bannerText } = props;
  return (
    <a
      href={bannerLink}
      className='AdvBlock'
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <span>{bannerText}</span>
    </a>
  );
}
