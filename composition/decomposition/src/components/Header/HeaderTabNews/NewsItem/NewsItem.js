/** RENDERS NEWS ITEM */
import React from 'react';

export default function NewsItem(props) {
  const { img, text, link, onClick } = props;
  return (
    <li className='NewsItem'>
      <a href={link} onClick={onClick}>
        <img src={img} alt='img' />
        <span>&nbsp;</span>
        <span>{text}</span>
      </a>
    </li>
  );
}
