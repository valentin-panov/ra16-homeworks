/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Watch from './Watch/Watch';
import WatchAnalog from './WatchAnalog/WatchAnalog';

function WatchField(props) {
  const { watch, onClickHandler } = props;
  return (
    <>
      <ul className='WatchField'>
        {watch.map((item) => (
          <Watch key={item.id} item={item} onClickHandler={onClickHandler} />
        ))}
      </ul>
      <ul className='WatchField'>
        {watch.map((item) => (
          <WatchAnalog
            key={item.id}
            item={item}
            onClickHandler={onClickHandler}
          />
        ))}
      </ul>
    </>
  );
}

WatchField.propTypes = {};

export default WatchField;
