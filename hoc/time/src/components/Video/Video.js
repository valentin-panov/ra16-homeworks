import React from 'react';
import DateTime from '../DateTime/DateTime';
import DateTimePrettier from '../DateTimePrettier/DateTimePrettier';

const DateTimePretty = DateTimePrettier(DateTime);

export default function Video({ url, date, id }) {
  return (
    <div className='video'>
      <iframe
        src={url}
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title={id}
      ></iframe>
      <DateTimePretty date={date} />
    </div>
  );
}
