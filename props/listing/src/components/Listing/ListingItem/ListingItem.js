import React from 'react';
import './ListingItem.css';

function ListingItem({ item }) {
  const { listing_id, url, MainImage, currency_code, price, quantity } = item;

  let img_url = '';
  try {
    img_url = MainImage.url_570xN;
  } catch (e) {
    console.error(e.message);
    return null;
  }

  let item_price;
  switch (currency_code) {
    case 'USD':
      item_price = '$' + price;
      break;
    case 'EUR':
      item_price = price + ' €';
      break;
    default:
      item_price = price + ' ' + currency_code;
      break;
  }

  let level_class;
  switch (true) {
    case quantity < 11:
      level_class = 'level-low';
      break;
    case quantity > 20:
      level_class = 'level-high';
      break;
    default:
      level_class = 'level-medium';
      break;
  }

  let { title } = item;
  if (title.length > 50) {
    title = title.substring(0, 50);
    title += '...';
  }

  return (
    <li data-id={listing_id} className='item'>
      <div className='item-image'>
        <a href={url}>
          <img src={img_url} alt={title} />
        </a>
      </div>
      <div className='item-details'>
        <p className='item-title'>{title}</p>
        <p className='item-price'>{item_price}</p>
        <p className={`item-quantity ${level_class}`}>{quantity} left</p>
      </div>
    </li>
  );
}

export default ListingItem;

// необходимо использовать свойство url_570xN для получения адреса главной картинки, строка;
