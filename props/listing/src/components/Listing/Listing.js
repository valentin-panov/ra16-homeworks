import React from 'react';
import './Listing.css';
import ListingItem from './ListingItem/ListingItem';
import sliceIntoChunks from '../../api/sliceIntoChunks';

function Listing(props) {
  const { items } = props;
  if (!items) {
    return null;
  }

  const chunks = 5;
  const splitArr = sliceIntoChunks(items, chunks);

  return (
    <div className={'item-list'}>
      {splitArr.map((chunk) => (
        <ul className={'listingColumn'} key={Math.random()}>
          {chunk.map((item) => (
            <ListingItem key={item.listing_id} item={item} />
          ))}
        </ul>
      ))}
    </div>
  );
}

export default Listing;
