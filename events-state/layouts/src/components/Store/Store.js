import React, { useState } from 'react';
import './Store.css';
import { products } from '../../data/products';
import IconSwitch from './IconSwitch/IconSwitch';
import CardsView from './CardsView/CardsView';
import ListView from './ListView/ListView';

export default function Store() {
  const [viewState, setView] = useState(false);

  const switchView = () => {
    setView(!viewState);
  };

  const productsID = products.map((product) => ({
    data: product,
    id: Math.random(),
  }));

  return (
    <div>
      <IconSwitch
        icon={viewState ? 'view_module' : 'view_list'}
        onSwitch={switchView}
      />
      {viewState ? (
        <CardsView cards={productsID} />
      ) : (
        <ListView items={productsID} />
      )}
    </div>
  );
}
