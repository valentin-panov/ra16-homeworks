/** RENDERS LIST OF NEWS ITEMS */
import React from 'react';
import NewsItem from '../NewsItem/NewsItem';

function HeaderTabItem({ title, link, selected, news, onClick }) {
  return (
    <div
      className={
        'HeaderTabItem' +
        (selected ? 'HeaderTabItem_selected' : 'HeaderTabItem_unselected')
      }
    >
      <a href={link}>{title}</a>
      {news &&
        news.map((item) => (
          <NewsItem
            key={item.id}
            text={item.title}
            link={item.link}
            onClick={onClick}
          />
        ))}
    </div>
  );
}

export default HeaderTabItem;
