import React from 'react';
import PropTypes from 'prop-types';
import Item from '../models/item';

class ShopItemClass extends React.Component() {
  constructor({ item }) {
    super(item);
  }
  render() {
    const { brand, title, description, descriptionFull, price, currency } =
      this.item;
    return (
      <div className='main-content'>
        <h2>{brand}</h2>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <div className='description'>{descriptionFull}</div>
        <div className='highlight-window mobile'>
          <div className='highlight-overlay'></div>
        </div>
        <div className='divider'></div>
        <div className='purchase-info'>
          <div className='price'>
            {currency}
            {price}
          </div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}

ShopItemClass.propTypes = {
  user: PropTypes.instanceOf(Item).isRequired,
};

export default ShopItemClass;
